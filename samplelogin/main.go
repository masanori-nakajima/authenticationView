package main

import (
	"github.com/masanori-nakajima/authenticationView/samplelogin/controller"

	"github.com/gin-gonic/gin"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func main() {
	router := gin.Default()

	router.GET("/", controller.GetLogin)

	router.Run(":8080")
}
