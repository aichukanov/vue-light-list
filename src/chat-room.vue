<template>
	<div class="room-wrapper">
		<div class="settings-wrapper">
			<div class="settings-row">
				Usual list
				<switch-button
					class="lightlist-switcher"
					v-model="lightListEnabled"
					:disabled="!areHeightsInitialized"
					:title="disabledSwitchTitle"
					@input="onSwitchMode()"
				/>
				Light list
			</div>
			<div class="settings-row">
				Count of rows
				<input
					class="row-count"
					v-model="rowCount"
					@keydown.enter="updateMessageList()"
					autofocus
				/>
			</div>
			<div class="settings-row reload-button-wrapper">
				<button
					class="button-reload"
					title="Create new message list" 
					@click="updateMessageList()">
					↻ Spent {{ lastReloadTime }} ms to render the list with {{ messages.length }} messages. Click to measure again
				</button>
			</div>
		</div>
		<div
			ref="scrollArea"
			class="message-list-wrapper"
			@scroll="onScroll"
		>
			<div v-if="isStubShown" :style="topStubStyle"></div>
			<message-row
				class="list-element"
				v-for="{ id, text, userName } in visibleMessages"
				:key="id"
				:userName="userName"
				:text="text"
				@remove="remove(id)"
			/>
			<div v-if="isStubShown" :style="bottomStubStyle"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MessageRow from './components/message-row.vue';
import SwitchButton from './components/switch-button.vue';
import { createMessageList, Message } from './utils';

@Component({ components: { MessageRow, SwitchButton }})
export default class ChatRoom extends Vue {
	public messages: Message[] = [];
	public lightListEnabled = false;
	public lastReloadTime: number = null;
	public rowCount = 2500;

	private timeTracker: number = null;

	private rowHeight = 0;
	private scrollAreaHeight = 0;
	private scrollTop = 0;

	public get isStubShown() {
		return this.lightListEnabled && !this.isEmptyList && this.areHeightsInitialized;
	}

	public get topStubStyle() {
		if (!this.isStubShown) {
			return null;
		}

		let height = this.hiddenElementsCount * this.rowHeight;
		if (height < 0) {
			height = 0;
		}

		return {
			height: `${height}px`,
		}
	}

	public get bottomStubStyle() {
		if (!this.isStubShown) {
			return null;
		}

		let height = (this.messages.length - this.hiddenElementsCount - this.visibleElementsCount) * this.rowHeight;
		if (height < 0) {
			height = 0;
		}

		return {
			height: `${height}px`,
		}
	}

	public get visibleMessages() {
		return this.lightListEnabled
			? this.messages.slice(this.hiddenElementsCount, this.hiddenElementsCount + this.visibleElementsCount)
			: this.messages;
	}

	public get isEmptyList() {
		return this.messages.length === 0;
	}

	public get areHeightsInitialized() {
		return this.rowHeight > 0 && this.scrollAreaHeight > 0;
	}

	public get disabledSwitchTitle() {
		return !this.areHeightsInitialized ? 'Switching is disabled until at least one item in the list is rendered' : null;
	}

	private get visibleElementsCount() {
		return Math.ceil(this.scrollAreaHeight / this.rowHeight);
	}

	private get hiddenElementsCount() {
		return Math.floor(this.scrollTop / this.rowHeight);
	}

	public async mounted() {
		this.updateMessageList();

		await this.$nextTick();
		if (this.isEmptyList) {
			const unwatch = this.$watch(() => this.isEmptyList, () => {
				if (!this.lightListEnabled && !this.isEmptyList) {
					this.initHeights();
					unwatch();
				}
			});
		} else {
			this.initHeights();
		}
	}

	public async updateMessageList() {
		this.timeTracker = new Date().getTime();
		this.messages = createMessageList(this.rowCount);

		await this.$nextTick();		
		this.lastReloadTime = new Date().getTime() - this.timeTracker;
	}

	public onScroll() {
		this.scrollTop = (this.$refs.scrollArea as HTMLElement).scrollTop;
	}

	public async onSwitchMode() {
		this.messages = [];
		await this.$nextTick;
		this.updateMessageList();
	}

	public remove(messageId: number) {
		const index = this.messages.findIndex(({ id }) => id === messageId);
		if (index >= 0) {
			this.messages.splice(index, 1);
		}
	}

	private initHeights() {
		const listWrapper = this.$refs.scrollArea as HTMLElement;
		this.scrollAreaHeight = listWrapper.clientHeight;
		this.rowHeight = listWrapper.querySelector('.list-element').clientHeight;
	}
}
</script>

<style lang="less">
@import "./styles/variables.less";

html,
body {
	height: 100%;
	margin: 0;
}

.room-wrapper {
	font-family: Verdana,Arial,sans-serif;
	margin: 0 auto;
	width: 100%;
	min-width: 250px;
	max-width: 600px;
	display: flex;
	flex-flow: column;
	height: 100%;
	overflow-x: auto;
}

.message-list-wrapper {
	height: 300px;
	overflow: auto;
	border: 1px solid @white-off;
	padding: 0 20px;
	font-size: 12px;
	flex: 1 1 auto;

	&:empty::after {
		content: 'no messages';
		text-align: center;
		width: 100%;
		display: block;
		margin: 10px 0;
		font-size: 16px;
		color: @light-gray;
	}
}

.lightlist-switcher {
	margin: 0 10px;
}

.settings-wrapper {
	@margin: 10px;
	margin: @margin 0;

	.settings-row {
		text-align: center;
		margin-bottom: @margin;

		.button-reload {
			background: none;
			border: 1px solid @light-gray;
			width: 100%;
			padding: 5px;
			cursor: pointer;
			font-size: 16px;

			&:hover {
				background-color: @white-off;
			}
		}

		&:last-child {
			margin-bottom: 0;
		}
	}
}

.row-count {
	width: 90px;
	text-align: right;
	border: 1px solid #ccc;
	outline: none;
    border-radius: 5px;
    padding: 5px;
    box-sizing: border-box;
    height: 25px;
}
</style>