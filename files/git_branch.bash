function git_branch() {
     if [ -d ".git" ]; then
         git branch 2> /dev/null | sed 's/^..//' | sed 's/master/m/'
     fi
}
