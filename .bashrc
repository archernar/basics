# *********************************************************DATEOMATIC: Sat May 31 08:41:18 EDT 2025
# *********************************************************HASHOMATIC: 89d4f025b6a4b06e7757ed0bec54e280
# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# disable color support of ls and grep
alias ls='ls --color=never'
alias grep='grep --color=never'
alias fgrep='fgrep --color=never'
alias egrep='egrep --color=never'

# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

source ~/bash.library
source ~/bashrc.shared


export JAVA_HOME=/home/mestes/jdk-23.0.2
export PATH=$JAVA_HOME/bin:$PATH
mkdir -p                     ~/BACKUPS
backup_file   .bashrc        ~/BACKUPS
backup_file   bashrc.shared  ~/BACKUPS
backup_file   bash.library   ~/BACKUPS
backup_file   .vimrc         ~/BACKUPS


function XXXTROWSACTUAL() {
         local void=1    # Bash-Function-Args
  local rows=$(tput lines)
  echo "$rows"
}
function XXXTROWS() {
         local offset=$1    # Bash-Function-Args
  local rows=$(odd_or_less $(tput lines)) # Use 'local' to keep variables within the function's scope.
  (( rows= rows + offset ))
  echo "$rows"
}


# show up to 3 parent dirs, except ~, resolve all other dir aliases
function git_toplevel() {
         local void="11";                          # Bash-Function-Args
     if [ -d ".git" ]; then
         git rev-parse --show-toplevel 2> /dev/null | sed -e "s,^$HOME,~,"
     fi
}
function git_branch() {
         local void="11";                          # Bash-Function-Args
     #git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
     if [ -d ".git" ]; then
         git branch --show-current 2> /dev/null | \
         sed 's/master/m/' | \
         sed 's/archival/a/'
     fi
}
function git_origin() {
         local void="11";                          # Bash-Function-Args
     # git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
     if [ -d ".git" ]; then
         git config --get remote.origin.url 2> /dev/null
     fi
}
function git_originsync() {
         local void="11";                          # Bash-Function-Args
     if [ -d ".git" ]; then
         git config color.ui false
         git branch -vv 2> /dev/null |  gawk 'match($0, /\[([^\]]+)\]/, a) { print a[1] }' | sed 's/origin/o/' | sed 's/master/m/' | sed 's/ ahead /+/'
     else
         echo ""
     fi
}
function collapse_pwd() {
         local void="11";                          # Bash-Function-Args
    curr_pwd=$(pwd | sed -e "s,^$HOME,~,")
    echo $curr_pwd
}
function collapse_hostname() {
         local void="11";                          # Bash-Function-Args
    curr_hostname=$(hostname)
    echo $curr_hostname
}
function prompt_pos() {
  local rows=$(tput lines)
  local col=1
  ((row=rows-2))
  printf "\033[${row};${col}H"
  util.print.color blue "-----------------------------------"
  ((row=rows-1))
  printf "\033[${row};${col}H"
  printf "\033[K"
}
export PS1='$(collapse_hostname) $(collapse_pwd) ($(git_toplevel):$(git_branch):$(git_originsync))>> '
