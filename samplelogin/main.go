package main

import (
	"github.com/gin-gonic/gin"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func main() {
	router := gin.Default()

	router.static("/view", "./view")

	router.GET("/personal-information", controller.GetLoginUser)
	router.Post("/personal-information", controller.PostLoginUser)

	router.Run()
}
