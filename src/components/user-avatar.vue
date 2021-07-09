<template>
	<span
		class="message__user-avatar"
		:title="userName"
	>
		{{ avatarText }}
	</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserAvatar extends Vue {
  @Prop({ type: String, required: true })
  public userName: string;

  public get avatarText() {
	  return this.userName.split(' ').map(([firstLetter]) => firstLetter).join('');
  }
}
</script>

<style lang="less">
@import "../styles/variables.less";

@size: 35px;

.message__user-avatar {
	display: inline-block;
	border-radius: 1000px;
	font-size: 12px;
	width: @size;
	height: @size;
	line-height: @size;
	vertical-align: bottom;
	text-align: center;
	color: @white;
	background-color: @blue;
	margin-right: 10px;
	cursor: pointer;
}
</style>