package controller

import (
	"log"
	"os"

	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"
	"github.com/masanori-nakajima/authenticationView/samplelogin/model"

	"github.com/gin-gonic/gin"
)

//DBの設定
func gormConnect() *gorm.DB {
	err := godotenv.Load()
	if err != nil {
		log.Fatal(err)
	}
	DBMS := os.Getenv("myuser_DBMS")
	USER := os.Getenv("myuser_USER")
	PASS := os.Getenv("myuser_PASS")
	DBNAME := os.Getenv("myuser_DBNAME")
	CONNECT := USER + ":" + PASS + "@/" + DBNAME + "?parseTime=true"
	db, err := gorm.Open(DBMS, CONNECT)
	if err != nil {
		panic(err.Error())
	}
	return db
}

func getUser(username string) model.User {
	db := gormConnect()
	var user model.User
	db.First(&user, "username = ?", username)
	db.Close()
	return user
}

func GetLogin(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "hello world",
	})
}
