package routes

import (
	"fmt"
	"net/http"
)

func newRouter() http.Handler {
	mux := http.NewServerMux()

	mux.HandleFunc("/", indexHandler)
	mux.HandleFunc("/api/data", apiDataHandler)

	return mux
}


func indexHandler(w http.ResponseWriter, r*http.Request) {
	fmt.Fprintln(w, "Welcome to the homepage")
}


func apiDataHandler(w http.ResponseWriter, r*http.Request) {
	data := "Some date from the API"
	fmt.Fprintln(w, data)
}