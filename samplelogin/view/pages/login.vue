<!-- ログイン画面　-->
<template>
<v-app>
<v-main>
<v-row justify="center">
	<div>
		<v-card
			class="card"
			flat
			width="540"
			outlined
		>
			<v-card-title
			back-ground-color= "blue"
			class="font-weigth-bold"
			justify="center"
			align-content="center"
			>ログイン
			</v-card-title>
      <v-form ref="login_form">
			<v-text-field
			input
			type="text"
			name="username"
			label="ユーザー名"
			outlined
			hint="登録しているユーザー名を入力してください"
			v-model="username"
			:rules="userNameRules"
			required
			></v-text-field>
			<v-text-field
			type="password"
			name="password"
			label="パスワード"
			hint="登録しているパスワードを入力してください。(11桁)"
			outlined
			v-model="password"
			:counter="11"
			:rules="passwordRules"
			required
			></v-text-field>
      </v-form>
			<div class="login-btn">
				<v-btn
				class="login orange"
				block
				large
				elevation="2"
				v-on:click="GetLogin"
				>ログイン</v-btn>
			</div>
			</v-card>
	</div>
</v-row>
<br />
<br />
<v-row justify="center">
			<div>
			<v-card
			class="cardbox"
			flat
			width="540"
			outlined
			>
				<v-card-title
				style="color: red"
				class="font-weigth-bold"
				justify="center"
				align-content="center"
				>未登録の場合は下記の新規登録を押してください
				</v-card-title>
			<v-btn
			class="new_registration orange"
			block
			large
			elevation="2"
			>新規登録</v-btn>
		</v-card>
		</div>
</v-row>
</v-main>
</v-app>
</template>


<script type="module">


export default {
	data: () => ({
		username: "",
		password: "",
		//入力規制のルールを設定
		userNameRules: [
			v => !!v || "ユーザー名は必須です。"
		],
		passwordRules: [
			v => !!v || "パスワードは必須です。"
		],
		model: {
			username: "",
			password: "",
		}

	}),
	methods: {
		GetLogin() {
			if (this.$refs.login_form.validate()) {
        		// すべてのバリデーションが通過したときのみ
        		// if文の中に入る
        	this.success = true;
          console.log("ok")
    	  } else {
        	this.success = false;
          console.log("faile")
    	}
		}
	}
}

</script>


<style scoped>

</style>