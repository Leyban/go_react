package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./../frontend/dist"))
	http.Handle("/", fs)

	http.HandleFunc("/api/data", dataHandler)

	fmt.Println("Listening at port 8888")
	http.ListenAndServe(":8888", nil)
}

type ApiResponse struct {
	Message string `json:"message"`
}

func dataHandler(w http.ResponseWriter, r *http.Request) {
	response := ApiResponse{Message: "Hello from the Golang API!"}
	json.NewEncoder(w).Encode(response)
}
