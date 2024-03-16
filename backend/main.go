package main

import (
	"fmt"
	"net/http"
)

func main() {
	mux := newMux()

	fmt.Println("Listening at port 8888")
	http.ListenAndServe(":8888", mux)
}

func newMux() *http.ServeMux {
	mux := http.NewServeMux()

	fs := http.FileServer(http.Dir("./../frontend/dist"))
	mux.Handle("/", fs)

	mux.HandleFunc("GET /api/test/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "He mad bro")
	})

	mux.HandleFunc("GET /api/test/{id}", func(w http.ResponseWriter, r *http.Request) {
		id := r.PathValue("id")
		fmt.Fprintf(w, "The id is: %s", id)
	})

	return mux
}
