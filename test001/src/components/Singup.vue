<template>
	<div class="singup">
		<table>
			<tr>
          <th>メールアドレス</th>
      </tr>
      <tr>
        <td><input type="email" v-model="mailadress"/></td>
      </tr>
			<tr>
				<th>パスワード</th>
			</tr>
			<tr>
				<td><input type="password" v-model="password"/></td>
			</tr>
			</table>
			<button @click="singup">登録</button>
	</div>
</template>

<script>
import firebase from 'firebase'

export default {
	methods: {
		singup: function () {
			firebase.auth().createUserWithEmailAndPassword()
			.then(
				//成功時の処理
			)
			.catch(
				//エラー時の処理
			)
		}
	}
}
</script>

<style>

</style>