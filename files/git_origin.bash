function git_origin() {
     if [ -d ".git" ]; then
         git config --get remote.origin.url 2> /dev/null
     fi
}
