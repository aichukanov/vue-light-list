<template>
	<div class="message__wrapper">
		<user-avatar :userName="userName" />
		<span class="message__text">
			{{ text }}
			<button
				class="message__remove"
				@click="$emit('remove')"
			>
				✖
			</button>
		</span>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserAvatar from './user-avatar.vue';

@Component({ components: { UserAvatar }})
export default class MessageRow extends Vue {
	@Prop({ type: String, required: true })
	public userName: string;

	@Prop({ type: String, required: true })
	public text: string;
}
</script>

<style lang="less">
@import "../styles/variables.less";

@size: 40px;
@message-background: #fafcfd;

.message__wrapper {
	width: 100%;
	padding: 3px 5px;
    box-sizing: border-box;
	position: relative;

	.message__text {
		position: relative;
		display: inline-block;
		color: @black;
		border: 1px solid @blue;
		border-radius: 10px;
		padding: 5px 25px 5px 10px;
		position: relative;
		background-color: @message-background;
		min-height: @size;
		vertical-align: top;

		&::after {
			content: '';
			position: absolute;
			width: 0;
			height: 0;
			border-bottom: 11px solid @message-background;
			border-left: 11px solid transparent;
			border-right: 11px solid transparent;
			bottom: 0;
			left: -11px;
		}

		&::before {
			content: '';
			position: absolute;
			width: 0;
			height: 0;
			border-bottom: 12px solid @blue;
			border-left: 12px solid transparent;
			border-right: 12px solid transparent;
			bottom: -1px;
			left: -13px;
		}

		.message__remove {
			position: absolute;
			top: 0;
			right: 0;
			vertical-align: top;
			background: none;
			border: none;
			color: @gray;
			display: none;
		}

		&:hover .message__remove {
			display: block;

			&:hover {
				color: @black;
				cursor: pointer;
			}
		}
	}
}
</style>