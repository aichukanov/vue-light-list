<template>
	<div class="room-wrapper">
		<div class="settings-row">
			Usual list
			<switch-button
				class="lightlist-switcher"
				v-model="lightListEnabled"
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
		<div
			ref="scrollArea"
			class="message-list-wrapper"
			@scroll="onScroll"
		>
			<div :style="topStubStyle"></div>
			<message-row
				v-for="{ id, text, userName } in visibleMessages"
				:key="id"
				:userName="userName"
				:text="text"
				@remove="remove(id)"
			/>
			<div :style="bottomStubStyle"></div>
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

	// Expected that we know the row height and it's the same for all rows. The value can be dynamic.
	private rowHeight = 58;

	private scrollAreaHeight = 0;
	private scrollTop = 0;

	public get topStubStyle() {
		if (!this.lightListEnabled) {
			return null;
		}

		return {
			height: this.hiddenElementsCount * this.rowHeight + 'px',
		}
	}

	public get bottomStubStyle() {
		if (!this.lightListEnabled) {
			return null;
		}

		return {
			height: (this.messages.length - this.hiddenElementsCount - this.visibleElementsCount) * this.rowHeight + 'px',
		}
	}

	public get visibleMessages() {
		return this.lightListEnabled
			? this.messages.slice(this.hiddenElementsCount, this.hiddenElementsCount + this.visibleElementsCount)
			: this.messages;
	}

	private get visibleElementsCount() {
		return Math.ceil(this.scrollAreaHeight / this.rowHeight);
	}

	private get hiddenElementsCount() {
		return Math.floor(this.scrollTop / this.rowHeight);
	}

	public mounted() {
		this.updateMessageList();
		this.scrollAreaHeight = (this.$refs.scrollArea as HTMLElement).clientHeight;
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
}
</script>

<style lang="less">
@import "./styles/variables.less";

.room-wrapper {
	font-family: Verdana,Arial,sans-serif;
	margin: 0 auto;
	width: 100%;
	max-width: 600px;
}

.message-list-wrapper {
	height: 300px;
	overflow: auto;
	border: 1px solid @white-off;
	padding: 0 20px;
	font-size: 12px;
}

.lightlist-switcher {
	margin: 0 10px;
}

.settings-row {
	text-align: center;
	margin-bottom: 20px;

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
}

.row-count {
	width: 90px;
	text-align: right;
	border: 1px solid #ccc;
	outline: none;
    border-radius: 5px;
    padding: 5px;
}
</style>