package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
	"log"
)

type Page struct {
	Title string
	Body []byte
}

func loadPage(section string, title string, extension string) (*Page, error) {
	if extension == "" {
		extension = "html"
	}
	if len(section) != 0 {
		section = section + "/"
	}
	filename := section + title + "." + extension
	log.Println("Filename: "+filename)
	body, err := ioutil.ReadFile(filename)
	if err != nil {
		return nil, err
	}
	return &Page{Title: title, Body: body}, nil
}

func pubViewHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/public/"):]
	var p *Page
	if len(title) < 2 {
		p, _ = loadPage("root", "public", "")
	} else {
		p, _ = loadPage("public", title, "")
	}
	fmt.Fprintf(w, "%s", p.Body)
}

func rozViewHandler(w http.ResponseWriter, r *http.Request) {
        title := r.URL.Path[len("/rozzie/"):]
        var p *Page
        if len(title) < 2 {
                p, _ = loadPage("root", "rozzie", "")
        } else {
                p, _ = loadPage("rozzie", title, "")
        }
        fmt.Fprintf(w, "%s", p.Body)
}

func rootViewHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/"):]
        var p *Page
        if len(title) < 2 {
		p, _ = loadPage("root", "root", "")
        } else {
		if strings.HasSuffix(title, ".html") {
			p, _ = loadPage("root", title, "")
		} else {
			log.Println(title)
			p, _ = loadPage("root", strings.Split(title, ".")[0], strings.Split(title, ".")[1])
		}
        }
        fmt.Fprintf(w, "%s", p.Body)
        fmt.Println(p.Body)
}

func loadDep(path string) ([]byte, error) {
	body, err := ioutil.ReadFile(path)
	if err != nil {
		return nil, err
	}
	return body, nil
}

func depViewHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/dep/"):]
	if strings.HasPrefix(title, "treant") {
		dep := title[len("treant/"):]
		if strings.HasPrefix(dep, "css") {
			d, _ := loadDep("deps/treant-js-master/Treant.css")
			fmt.Fprintf(w, "%s", d)
		}
		if strings.HasPrefix(dep, "js") {
			d, _ := loadDep("deps/treant-js-master/Treant.js")
			fmt.Fprintf(w, "%s", d)
		}
	}
}

func main() {
	http.HandleFunc("/public/", pubViewHandler)
	http.HandleFunc("/rozzie/", rozViewHandler)
	http.HandleFunc("/dep/", depViewHandler)
	http.HandleFunc("/", rootViewHandler)
	fmt.Println(http.ListenAndServe(":4769", nil))
}
