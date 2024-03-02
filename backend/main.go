package main

import (
	"fmt"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./../frontend/dist"))
	http.Handle("/", fs)

	fmt.Println("Listening at port 8888")
	http.ListenAndServe(":8888", nil)
}
