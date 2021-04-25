package main

import (
	"github.com/gin-gonic/gin"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/masanori-nakajima/authenticationView/samplelogin/controller"
)

func main() {
	router := gin.Default()

	router.Static("/dist", "/home/masanori-nakajima/go/src/github.com/masanori-nakajima/authenticationView/samplelogin/view/dist")

	router.GET("/pages", controller.GetLogin)

	router.Run(":8080")
}
