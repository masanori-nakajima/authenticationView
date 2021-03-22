<template>
<v-app>
		<v-card>
			<v-card-title class="font-weight-bold">新規会員登録フォーム</v-card-title>
				<v-form>
					<v-container>
						<v-row>
							<v-col
							cols="12"
							md="4"
							> <!-- v-model="firstname"と　:rules="nameRules"　を後ほど追加 -->
								<v-text-field
									:counter="20"
									label="名字"
									required
								></v-text-field>
							</v-col>
							<v-col
								cols="12"
								md="4"
							>
              <!-- v-model="lastname"と:rules="nameRules"を後ほど追加 -->
							<v-text-field
								:counter="20"
								label="名前"
								required
							></v-text-field>
						</v-col>
					</v-row>
          <v-row>
            <v-col>
              <!-- v-model="phoneNumber" 後ほど追加 -->
              <v-text-field
                :counter="11"
                label="電話番号"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="生年月日"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                  :day-format="date => new Date(date).getDate()"
                  locale="ja-jp"
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-row>
            <v-btn
              elevation="4"
              color="primary"
              >新規登録
            </v-btn>
          </v-row>
				</v-container>
			</v-form>
		</v-card>
	</v-app>
</template>

<script>

export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
    }),
  }
</script>