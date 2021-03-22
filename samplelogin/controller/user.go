package controller

import (
	"log"
	"model"
	"net/http"
	"samplelogin/crypto"

	"github.com/gin-gonic/gin"
)

func getUser(username string) model.User {
	db := gormConnect()
	var user model.User
	db.First(&user, "username = ?", username)
	db.Close()
	return user
}

func PostLoginUser(c *gin.Context) {
	dbpassword := getUser(c.PostForm("username")).Password
	log.Println(dbpassword)

	formPassword := c.PostForm("password")

	//ユーザーのパスワードを比較
	if err := crypto.CompareHashAndPassword(dbpassword, formPassword); err != nil {
		log.Println("ログインできませんでした。")
		c.HTML(http.StatusBadRequest, "login.vue", gin.H{"err": err})
		c.Abort()
	} else {
		log.Println("ログイン成功")
		c.Redirect(302, "/")
	}
}

func loadbrowser(c *gin.Context) {
	c.String(200, "hello world")
	router.Run("8080")
}
