| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
|----------|----------|----------|----------|
| [.bashrc](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.bashrc) | [.gitignore](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.gitignore) | [.vimrc](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.vimrc) | [README.md](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/README.md) |
| [bash.functions](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.functions) | [bash.justhelp](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.justhelp) | [bash.library](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.library) | [bashrc.shared](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashrc.shared) |
| [bashtop](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashtop) | [colomatic](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/colomatic) | [deploy](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/deploy) | [gDiff](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gDiff) |
| [gHardSync](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gHardSync) | [gLocal](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gLocal) | [gStatus](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gStatus) | [gUpdate](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdate) |
| [gUpdateFromOrigin](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdateFromOrigin) | [gawk.library](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gawk.library) | [get.raw](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/get.raw) | [getme](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/getme) |
| [indentomatic](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/indentomatic) | [justomatic](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/justomatic) | [listing](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/listing) | [make](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/make) |
| [newbashscript](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/newbashscript) | [notes](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/notes) | [other](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/other) | [padomatic](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/padomatic) |
| [rmLeadingWhiteSpace](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/rmLeadingWhiteSpace) | [setgit](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/setgit) | [template.html](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/template.html) | [update](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/update) |
| [vim.txt](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/vim.txt) |  |  |  |  |


| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
|----------|----------|----------|----------|
| colomatic | indentomatic | justomatic | padomatic |


## bash.library includes

| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
|----------|----------|----------|----------|
| abspath() | array_contains() | array_join() | backup_file() |
| basename() | collapse_hostname() | collapse_pwd() | command_exists() |
| contains() | cp_r() | create_markdown_table4() | dirname() |
| ends_with() | eprint() | exists() | extension() |
| fdebug() | fecho() | git_branch() | git_origin() |
| git_originsync() | git_toplevel() | indent_file() | isSameHash() |
| is_dir() | is_file() | is_reachable() | justify_file() |
| justify_line() | kill_name() | kill_pid() | longest_string_length() |
| mkdir_p() | mv_f() | padout_file_lines() | pidof_name() |
| read_prompt() | repeat_char() | replace() | rm_rf() |
| run_and_error() | run_and_exit_code() | run_and_output() | scan_for_secrets() |
| sort_file() | split_file_n() | starts_with() | string_after_file_lines() |
| string_before_file_lines() | substring() | timestamp_ms() | trim() |
| trim_leading_whitespace_file() | truncate_file_lines() |  |  |  |


```

#######################################################################################################
Processing file: .bashrc
   _               _              
  | |__   __ _ ___| |__  _ __ ___ 
  | '_ \ / _` / __| '_ \| '__/ __|
 _| |_) | (_| \__ \ | | | | | (__ 
(_)_.__/ \__,_|___/_| |_|_|  \___|
                                  
# *********************************************************DATEOMATIC: Mon Mar 24 11:21:36 EDT 2025
# *********************************************************HASHOMATIC: e5bceedce2750c47d9d26c395afd43b0
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

#######################################################################################################
Processing file: .vim.vimsession
       _                 _                             _             
__   _(_)_ __ ___ __   _(_)_ __ ___  ___  ___  ___ ___(_) ___  _ __  
\ \ / / | '_ ` _ \\ \ / / | '_ ` _ \/ __|/ _ \/ __/ __| |/ _ \| '_ \ 
 \ V /| | | | | | |\ V /| | | | | | \__ \  __/\__ \__ \ | (_) | | | |
(_)_/ |_|_| |_| |_(_)_/ |_|_| |_| |_|___/\___||___/___/_|\___/|_| |_|
                                                                     
/home/mestes/scm/basics/colomatic
/home/mestes/scm/basics/bash.library

#######################################################################################################
Processing file: .vim.vimwindow
       _                 _                   _           _               
__   _(_)_ __ ___ __   _(_)_ __ _____      _(_)_ __   __| | _____      __
\ \ / / | '_ ` _ \\ \ / / | '_ ` _ \ \ /\ / / | '_ \ / _` |/ _ \ \ /\ / /
 \ V /| | | | | | |\ V /| | | | | | \ V  V /| | | | | (_| | (_) \ V  V / 
(_)_/ |_|_| |_| |_(_)_/ |_|_| |_| |_|\_/\_/ |_|_| |_|\__,_|\___/ \_/\_/  
                                                                         
/home/mestes/scm/basics/bash.library

#######################################################################################################
Processing file: .vimrc
       _                    
__   _(_)_ __ ___  _ __ ___ 
\ \ / / | '_ ` _ \| '__/ __|
 \ V /| | | | | | | | | (__ 
(_)_/ |_|_| |_| |_|_|  \___|
                            
" *********************************************************DATEOMATIC: Mon Mar 24 11:21:36 EDT 2025
" *********************************************************HASHOMATIC: 2dfc1b0e6845bc5a5eb3fa9c7a96de5a
" *****************************************************************************************************
                " W e l c o m e   t o   m y  V I M R C
                " *************************************************************************************
set nocompatible
set hidden                        " Will switch to next buffer without raising an error
set nowrap
set nohlsearch
set noerrorbells
set scrolloff=8
let loaded_matchparen = 1         
            " http://vimrc-dissection.blogspot.com/2006/09/vim-7-re-turn-off-parenparenthesiswhat.html
set splitbelow
set splitright
set cmdheight=2                   " Set the command window height to 2 lines, to avoid many cases
                                  " of having to  press <Enter> to continue
set ruler                         " Display crsr pos on last line of scr or in status line of a window
set number                        " Display line numbers on the left
set wildmenu                      " Better command-line completion
set showcmd                       " Show partial commands in the last line of the screen
set ignorecase                    " Use case insensitive search, except when using capital letters
set smartcase
set backspace=indent,eol,start    " Allow bckspcing over autoindent, line brks & start of insrt action
set nostartofline                 " Stop certain movements from always going to the 1st char of a line.
set laststatus=2                  " Always display the status line, even if only 1 window is displayed
set noswapfile
set nobackup
set undodir=~/.vim/undodir
set undofile
set colorcolumn=104
set background=dark
set laststatus=2                  " For Status Line
set t_Co=256                      " For Status Line

" set relativenumber
" set signcolumn=yes
" set incsearch
" set hlsearch incsearch          " Highlight searches (use <C-L> to temporarily turn off highlighting
                                  " see the mapping of <C-L> below)

" *****************************************************************************************************
                " Indent and Tab  Setup
                " *************************************************************************************
" There are in fact four main methods available for indentation, each one
" overrides the previous if it is enabled, or non-empty for 'indentexpr':
" 'autoindent'	uses the indent from the previous line.
"               When opening a new line and no filetype-specific indenting is enabled, keep same
"               indent as line currently on.
" 'smartindent'	is like 'autoindent' but also recognizes some C syntax to
" 		increase/reduce the indent where appropriate.
" 'cindent'	Works more cleverly than the other two and is configurable to
" 		different indenting styles.
" 'indentexpr'	The most flexible of all: Evaluates an expression to compute
" 		the indent of a line.  When non-empty this method overrides
" 		the other ones.  See |indent-expression|.
" set cindent                       
set tabstop=4 softtabstop=4
set shiftwidth=4     " Indent settings for using 4 spaces instead of tabs.
                     " Do not change 'tabstop' from its default value of 8 
set expandtab
set smartindent
" *****************************************************************************************************
                " Syntax Highlighting
                " *************************************************************************************
syntax off

set confirm                       " Instead of failing a command because of unsaved changes,
                                  " raise a dialogue asking to save changed files.
set visualbell                    " Use visual bell instead of beeping when doing something wrong
set t_vb=
                                  " reset terminal code for visual bell. 
                                  " If visualbell is set, and this line is also included vim will
                                  " neither flash nor beep. If visualbell is unset, this does nothing.
let mapleader = " "               " Leader - ( Spacebar )
let MRU_Auto_Close = 1            " Set MRU window to close after selection
set notimeout ttimeout ttimeoutlen=200  " Quickly time out on keycodes, but never time out on mappings

" *****************************************************************************************************
                " Commands
                " *************************************************************************************
command! -nargs=+ GREP call GrepBuffers(<q-args>)
command! SESSION      :call CaptureSession() 
command! MyLinter :caddexpr system("cat zzzz") | copen
command! ZZZZ :caddexpr system("cat zzzz") | copen
map <C-j> :cn<CR>
map <C-k> :cp<CR>
map <C-@> @a

"  :copen " Open the quickfix window
"  :ccl   " Close it
"  :cw    " Open it if there are "errors", close it otherwise (some people prefer this)
"  :cn    " Go to the next error in the window
"  :cp    " Go to the previous error in the window
"  :cnf   " Go to the first error in the next file
"  :.cc   " Go to error under cursor (if cursor is in quickfix window)
"
" *****************************************************************************************************
                " Pre Vundle Setup
                " *************************************************************************************
filetype off

" let NOVUNDLE = 1
" *****************************************************************************************************
                " Vundle            - see :h vundle for more details or wiki for FAQ
                " *******************************************************************
                " git clone  https://github.com/VundleVim/Vundle.vim.git  ~/.vim/bundle/Vundle.vim
                " git clone  https://github.com/archernar/home.git .
                " git clone  https://github.com/archernar/dotfiles.git    ~/tmp
                " git clone
                " OLD TO BE REMOVED git clone  https://github.com/archernar/Snips.git .
                " :PluginList       - lists configured plugins
                " :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
                " :PluginUpdate     - <leader>p
                " :PluginSearch foo - searches for foo; append `!` to refresh local cache
                " :PluginClean      - confirms removal of unused plugins;
                "                     append `!` to auto-approve removal
                " *************************************************************************************
                
" *****************************************************************************************************
                " Vundle Begin
                " *************************************************************************************
if !exists("NOVUNDLE")
    set rtp+=~/.vim/bundle/Vundle.vim
    call vundle#begin()
    " Plugin 'VundleVim/Vundle.vim'
    Plugin 'archernar/vim-flashcard'
    Plugin 'archernar/vim-dir'
    Plugin 'archernar/vim-progsnips'
    Plugin 'archernar/vim-map'
    Plugin 'archernar/vim-utils'
    Plugin 'archernar/vim-session'
    Plugin 'archernar/vim-program'
    Plugin 'archernar/vim-monochrome'
    Plugin 'archernar/vim-mru'
    Plugin 'vim-scripts/grep.vim'      " https://github.com/vim-scripts/grep.vim
    Plugin 'gruvbox-community/gruvbox'
    Bundle 'Lokaltog/vim-monotone.git'
    Bundle 'owickstrom/vim-colors-paramount'
    Plugin 'tpope/vim-surround'
    Plugin 'vim-airline/vim-airline'
    " Plugin 'tpope/vim-fugitive'
    " Plugin 'vim-airline/vim-airline-themes'
    " Plugin 'jeetsukumaran/vim-buffergator'
    " Plugin 'ctrlpvim/ctrlp.vim'
    "
    call vundle#end()
endif
" *****************************************************************************************************
                " Vundle End
                " *************************************************************************************
                                  
" *****************************************************************************************************
                " Post Vundle Setup
                " *************************************************************************************
filetype plugin indent on         " required, to ignore plugin indent changes, instead use: 
                                  " filetype plugin on
                                  " Put non-Plugin stuff after this line



" *****************************************************************************************************
                " Functions
                " *************************************************************************************
function g:LogMessage(...)
    let l:ret = 0

    let l:messages=[]
    call add(l:messages, a:1)
    call writefile(l:messages, "/tmp/vimscript.log", "a")
    return l:ret
endfunction

" *****************************************************************************************************
                " Remaps
                " *************************************************************************************
nnoremap         <F1>      :cclose<cr>:bnext<cr>
nnoremap <leader><F1>      :cclose<cr>
inoremap         <F5> <esc>:call ProgramCompile()<cr>
nnoremap         <F5>      :call ProgramCompile()<cr>
nnoremap <leader><F6>      :cclose<cr>
inoremap         <F6> <esc>:call ProgramRun()<cr>
nnoremap         <F6>      :call ProgramRun()<cr>
nnoremap <Leader>p         :PluginUpdate<cr>

" *****************************************************************************************************
                " Folding
                " *************************************************************************************

" set foldcolumn=3
" set foldmethod=marker
" set foldlevelstart=20
" set foldlevelstart=20
set foldlevel=1
set foldmethod=marker

" *****************************************************************************************************
                " Auto Commands
                " *************************************************************************************
    augroup AUTOGROUPONE
        autocmd!
        "au BufNewFile,BufRead *.ses let s=g:SessionMan()
    augroup END

" *****************************************************************************************************
                " Session Setup
                " *************************************************************************************
if ( 1 == 0 ) 
    if ( argc() == 0 ) 
         augroup VIMAUTOGROUPA
             autocmd!
             autocmd VimEnter * :call LoadSession()
         augroup END
    endif
    if ( argc() == 1 ) 
         let s:n=match(argv(0), "vimsession$")
         if (s:n>0)
             let $VIMFIRSTFILE=argv(0)
             let s:temp = argv(0)
             let s:temp = substitute(s:temp, ".vimsession$", "", "")
             let $VIMSESSION=s:temp
             let $VIMWINDOW="NIL"
             let $VIMSPLIT="NIL"
             if ( 1 == 1 ) 
             augroup VIMAUTOGROUPB
                 autocmd!
                 autocmd VimEnter * :call LoadSession()
                 "autocmd VimEnter * :echom "POPEYE"
             augroup END
             endif
         endif
    endif
endif

"   ***************************************************************************************************
                " Jump to Last Position When Reopening a File
                " *************************************************************************************
   if has("autocmd")
      au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$")
      \| exe "normal! g'\"" | endif
   endif
function! s:SLine(msg)
    let save_statusline = &statusline  " Save the current statusline
    let &statusline = a:msg
    "let &statusline = save_statusline
endfunction
"
" wget -O ~/.vim/vim.txt https://raw.githubusercontent.com/archernar/basics/refs/heads/master/vim.txt
" nnoremap         <F7> :call g:FlashCard($HOME . "/.vim/1.fc")<cr>
" nnoremap <leader><F7> :call g:UnFlashCard()<cr>
"   ***************************************************************************************************
                " Multi Toggle
                " *************************************************************************************
function! MultiToggle()
    let sMt=[]
    call add(sMt, [0, "Upper Mode",                  ":call ToUpperUnderCursor()<cr>"])
    call add(sMt, [1, "Lower Mode",                  ":call ToLowerUnderCursor()<cr>"])
    call add(sMt, [2, "ls",                          ":ls<cr>"])
    call add(sMt, [3 ,"Edit dots and configs",       ":call EditDotFiles()<cr>"])
    call add(sMt, [4, "Open Vim Sheatsheet",         ":e ~/.vim/vimbrief.txt<cr>"])
    call add(sMt, [5, "Reselect Visual Selection",   "gv"])
    call add(sMt, [6, "Search for Word Under Cursor",":%s/\<<C-r><C-w>\>//gI<Left><Left><Left>"])
    call add(sMt, [6, "6One", "Two"])
    call add(sMt, [7, "7One", "Two"])
    call add(sMt, [8, "8TestMeMe", "silent nnoremap  <F7> :call g:Test()" ])
    call add(sMt, [9, "9One", "Two"])
    let g:multi_toggle_state = g:multi_toggle_state  + 1
    if g:multi_toggle_state == 7
        let g:multi_toggle_state = 0
    endif
    execute "silent nnoremap <F7> " . sMt[g:multi_toggle_state][2]
    let &statusline = sMt[g:multi_toggle_state][1]
endfunction

function! g:Test()
    echom "TEST TEST TEST TEST"
endfunction

function! EditDotFiles()
        execute  "edit ~/.bashrc"
        execute  "edit ~/.vimrc"
        execute  "edit ~/.profile"
        execute  "edit ~/.vim/vimbrief.txt"
        execute  "edit ~/.vim/vim.txt"
endfunction
function! MultiToggleVoid()
        let g:multi_toggle_state = 0
endfunction

let g:multi_toggle_state = -1
let &statusline = "Void Mode"
nnoremap <F7> :call MultiToggleVoid()<CR>
nnoremap <F8> :call MultiToggle()<CR>
nnoremap <F9> :call GitPopUp()<CR>
nnoremap <F10> :call UtilityPopUp("/home/mestes/vim.txt")<CR>



function! ToLowerUnderCursor()
  " Get the current cursor position.
  let [row, col] = getpos('.')[1:2]

  " Get the character under the cursor.
  let char = getline(row)[col-1]

  " Check if a character exists at the cursor position (not end of line).
  if char != ""

    " Convert the character to lowercase.
    let lower_char = tolower(char)

    " Replace the character under the cursor with the lowercase version.
    call setline(row, strpart(getline(row), 0, col-1) . lower_char . strpart(getline(row), col))

    " Restore the cursor position (important!).
    call cursor(row, col)
  endif
endfunction
function! ToUpperUnderCursor()
  " Get the current cursor position.
  let [row, col] = getpos('.')[1:2]

  " Get the character under the cursor.
  let char = getline(row)[col-1]

  " Check if a character exists at the cursor position (not end of line).
  if char != ""

    " Convert the character to uppercase.
    let upper_char = toupper(char)

    " Replace the character under the cursor with the uppercase version.
    call setline(row, strpart(getline(row), 0, col-1) . upper_char . strpart(getline(row), col))

    " Restore the cursor position (important!).
    call cursor(row, col)
  endif
endfunction

" Map a key to call the function.  For example, map <Leader>u to it.
" You can choose any key combination you prefer.  <Leader> is often \.
" See :help leader for more about setting the leader key.
" Example:
"
" hello
"
"
" Option 1: Add the current file
nnoremap <leader>gaf :!git add %<CR>

" Option 2: Add the current file and stage changes
nnoremap <leader>gac :!git add % && git commit -m "Staged changes" <CR>

" Option 3: Add all changes in the current directory
nnoremap <leader>gaa :!git add .<CR>

" Option 4: Add all changes in the current directory and stage changes
nnoremap <leader>gss :!git add . && git commit -m "Staged all changes" <CR>

" Option 5: Add the current file and show git status
nnoremap <leader>gas :!git add %<CR>:!git status<CR>

" Option 6: Add all changes in the current directory and show git status
nnoremap <leader>gaas :!git add .<CR>:!git status<CR>

" Option 7: Add the current file and run a custom git command
"nnoremap <leader>gac :!git add % && git commit -m <C-r>=@%<CR><CR>

" Option 8: Add all changes in the current directory and run a custom git command
nnoremap <leader>gacc :!git add . && git commit -m <C-r>=getcwd()<CR><CR>


function! g:OpenReadOnlyFileExit()
    silent exe "bd!"
    echom ""
endfunction
function! g:BufferDelete(...)
        if (a:1 == 0)
            nnoremap <silent> <buffer> q     :call g:BufferDelete(1)<cr>
            nnoremap <silent> <buffer> <F1>  :call g:BufferDelete(1)<cr>
            nnoremap <silent> <buffer> <esc> :call g:BufferDelete(1)<cr>
        else
            silent exe "bd!"
        endif
    echom ""
endfunction
function! g:OpenReadOnlyFile(...)
        let l:filename = a:1
        exe "set nopaste"
        let l:f = l:filename
        if filereadable(l:f)
            " silent exe "tabnew " . l:f
            silent execute "edit " . l:f
            silent exe "set buftype=nowrite"
            nnoremap <silent> <buffer> q     :call g:OpenReadOnlyFileExit()<cr>
            nnoremap <silent> <buffer> <F1>  :call g:OpenReadOnlyFileExit()<cr>
            nnoremap <silent> <buffer> <esc> :call g:OpenReadOnlyFileExit()<cr>
            silent exe "normal gg0"
        endif
        exe "set paste"
endfunction

"https://www.baeldung.com/linux/vim-find-full-path-current-file#:~:text=The%20%25%20Register,%2C%20depending%20on%20the%20context).
"let l:command = "/usr/bin/git add " . expand('%') . ";git commit -m \"Update\"; git push origin master"
func! MenuCB(id, result)
    if ( a:result == 1 )
        let l:command = "git status > /tmp/out"
        call system(l:command)
        call UtilityPopUp("/tmp/out")
        "execute "new | r ! " . l:command
        "call g:BufferDelete(0)
    endif
    if ( a:result == 2 )
        let l:command = "/usr/bin/git add " . expand('%')
        execute "new | r ! " . l:command
        call g:BufferDelete(0)
    endif
    if ( a:result == 3 )
        let l:command = "git commit -m \"Update\""
        execute "new | r ! " . l:command
        call g:BufferDelete(0)
    endif
    if ( a:result == 4 )
        let l:command = "git push origin master"
        execute "new | r ! " . l:command
        call g:BufferDelete(0)
    endif
    if ( a:result == 5 )
        let l:command = "/usr/bin/git add " . expand('%') . ";git commit -m \"Update\"; git push origin master"
        execute "new | r ! " . l:command
        call g:BufferDelete(0)
    endif
    if ( a:result == 6 )
        let l:command = "./make"
        execute "new | r ! " . l:command
        call g:BufferDelete(0)
    endif
    if ( a:result == 7 )
        let l:command = "./deploy"
        execute "new | r ! " . l:command
        call g:BufferDelete(0)
    endif
    if ( a:result == 8 )
        call g:UtilityPopupCommand("df -h")
    endif
    if ( a:result == 9 )
        call g:UtilityBufferCommand("cat /usr/share/vim/vim82/doc/*.txt")
    endif
    if ( a:result == 10 )
        call g:UtilityBufferCommand("cat /usr/share/vim/vim82/doc/pop*.txt")
    endif

endfunc

func! DoNothingCB(id, result)
    let l:NOTHING=0
endfunc


" https://vi.stackexchange.com/questions/24462/what-are-the-new-popup-windows-in-vim-8-2
function! g:GitPopUp()
call popup_menu(['Status', 'add', 'commit', 'push', 'all', 'make', 'deploy','df','vim', 'pop' ], 
     \ #{ title: "Git", callback: 'MenuCB', line: 25, col: 40, 
     \ highlight: 'Question', border: [], close: 'click',  padding: [1,1,0,1]} )
endfunction




" *****************************************************************************************************
                " Utility Popup
                " *************************************************************************************
function! g:UtilityPopupCommand(...)
    call system( a:1 . " > /tmp/out" )
    call UtilityPopUp("/tmp/out")
endfunction
let g:utilityPopupFilename = ""
function! g:UtilityPopUp(...)
    if filereadable(a:1)
        let g:utilityPopupFilename = a:1 
        call popup_create(readfile(a:1), #{ line: 1, col: 1, border: [], padding: [1,1,1,1] } )
        let l:id = popup_list()[0]
        call popup_move(l:id, #{ line: 2, col: 4, 
                    \ minwidth: &columns -14,
                    \ maxheight: &lines -8, maxwidth: &columns -8,
                    \ })
        hi MyPopupColor ctermbg=black guibg=black
        call setwinvar(l:id, '&wincolor', 'MyPopupColor')
        nnoremap <DOWN> :call ScrollPopup(1)<CR>
        nnoremap <UP>   :call ScrollPopup(-1)<CR>
        nnoremap <F10>  :call UtilityPopUpClear(g:utilityPopupFilename)<CR>
    endif
endfunction
function! g:UtilityBufferCommand(...)
    call system( a:1 . " > /tmp/out" )
    call UtilityBuffer("/tmp/out")
endfunction
function! g:UtilityBuffer(...)
    if filereadable(a:1)
        execute "edit " . a:1
    endif
endfunction

function! g:UtilityPopUpClear(...)
    call popup_clear(1)
    nnoremap <DOWN> <down>
    nnoremap <UP>   <up>
    nnoremap <F10>  :call UtilityPopUp(g:utilityPopupFilename)<CR>
endfunction

function! ScrollPopup(nlines)
    let winids = popup_list()
    if len(winids) == 0
        return
    endif

    " Ignore hidden popups
    let prop = popup_getpos(winids[0])
    if prop.visible != 1
        return
    endif

    let firstline = prop.firstline + a:nlines
    let buf_lastline = str2nr(trim(win_execute(winids[0], "echo line('$')")))
    if firstline < 1
        let firstline = 1
    elseif prop.lastline + a:nlines > buf_lastline
        let firstline = buf_lastline + prop.firstline - prop.lastline
    endif

    call popup_setoptions(winids[0], {'firstline': firstline})
endfunction


#######################################################################################################
Processing file: a
       
  __ _ 
 / _` |
| (_| |
 \__,_|
       
Global

:h[elp] keyword - open help for keyword
:sav[eas] file - save file as
:clo[se] - close current pane
:ter[minal] - open a terminal window
K - open man page for word under the cursor
Tip Run vimtutor in a terminal to learn the first Vim commands.

Cursor movement

h - move cursor left
j - move cursor down
k - move cursor up
l - move cursor right
gj - move cursor down (multi-line text)
gk - move cursor up (multi-line text)
H - move to top of screen
M - move to middle of screen
L - move to bottom of screen
w - jump forwards to the start of a word
W - jump forwards to the start of a word (words can contain punctuation)
e - jump forwards to the end of a word
E - jump forwards to the end of a word (words can contain punctuation)
b - jump backwards to the start of a word
B - jump backwards to the start of a word (words can contain punctuation)
ge - jump backwards to the end of a word
gE - jump backwards to the end of a word (words can contain punctuation)
% - move cursor to matching character (default supported pairs: '()', '{}', '[]' 
- use :h matchpairs in vim for more info)
0 - jump to the start of the line
^ - jump to the first non-blank character of the line
$ - jump to the end of the line
g_ - jump to the last non-blank character of the line
gg - go to the first line of the document
G - go to the last line of the document
5gg or 5G - go to line 5
gd - move to local declaration
gD - move to global declaration
fx - jump to next occurrence of character x
tx - jump to before next occurrence of character x
Fx - jump to the previous occurrence of character x
Tx - jump to after previous occurrence of character x
; - repeat previous f, t, F or T movement
, - repeat previous f, t, F or T movement, backwards
} - jump to next paragraph (or function/block, when editing code)
{ - jump to previous paragraph (or function/block, when editing code)
zz - center cursor on screen
zt - position cursor on top of the screen
zb - position cursor on bottom of the screen
Ctrl + e - move screen down one line (without moving cursor)
Ctrl + y - move screen up one line (without moving cursor)
Ctrl + b - move screen up one page (cursor to last line)
Ctrl + f - move screen down one page (cursor to first line)
Ctrl + d - move cursor and screen down 1/2 page
Ctrl + u - move cursor and screen up 1/2 page

Insert mode - inserting/appending text

i - insert before the cursor
I - insert at the beginning of the line
a - insert (append) after the cursor
A - insert (append) at the end of the line
o - append (open) a new line below the current line
O - append (open) a new line above the current line
ea - insert (append) at the end of the word
Ctrl + h - delete the character before the cursor during insert mode
Ctrl + w - delete word before the cursor during insert mode
Ctrl + j - add a line break at the cursor position during insert mode
Ctrl + t - indent (move right) line one shiftwidth during insert mode
Ctrl + d - de-indent (move left) line one shiftwidth during insert mode
Ctrl + n - insert (auto-complete) next match before the cursor during insert mode
Ctrl + p - insert (auto-complete) previous match before the cursor during insert mode
Ctrl + rx - insert the contents of register x
Ctrl + ox - Temporarily enter normal mode to issue one normal-mode command x.
Esc or Ctrl + c - exit insert mode

Editing

r - replace a single character.
R - replace more than one character, until ESC is pressed.
J - join line below to the current one with one space in between
gJ - join line below to the current one without space in between
gwip - reflow paragraph
g~ - switch case up to motion
gu - change to lowercase up to motion
gU - change to uppercase up to motion
cc - change (replace) entire line
c$ or C - change (replace) to the end of the line
ciw - change (replace) entire word
cw or ce - change (replace) to the end of the word
s - delete character and substitute text (same as cl)
S - delete line and substitute text (same as cc)
xp - transpose two letters (delete and paste)
u - undo
U - restore (undo) last changed line
Ctrl + r - redo
. - repeat last command

Marking text (visual mode)

v - start visual mode, mark lines, then do a command (like y-yank)
V - start linewise visual mode
o - move to other end of marked area
Ctrl + v - start visual block mode
O - move to other corner of block
aw - mark a word
ab - a block with ()
aB - a block with {}
at - a block with <> tags
ib - inner block with ()
iB - inner block with {}
it - inner block with <> tags
Esc or Ctrl + c - exit visual mode

Visual commands

> - shift text right
< - shift text left
y - yank (copy) marked text
d - delete marked text
~ - switch case
u - change marked text to lowercase
U - change marked text to uppercase

Registers

:reg[isters] - show registers content
"xy - yank into register x
"xp - paste contents of register x
"+y - yank into the system clipboard register
"+p - paste from the system clipboard register
Tip Registers are being stored in ~/.viminfo, and will be loaded again on next restart of vim.

Special registers:

0 - last yank
" - unnamed register, last delete or yank
% - current file name
# - alternate file name
* - clipboard contents (X11 primary)
+ - clipboard contents (X11 clipboard)
/ - last search pattern
: - last command-line
. - last inserted text
- - last small (less than a line) delete
= - expression register
_ - black hole register

Marks and positions

:marks - list of marks
ma - set current position for mark A
`a - jump to position of mark A
y`a - yank text to position of mark A
`0 - go to the position where Vim was previously exited
`" - go to the position when last editing this file
`. - go to the position of the last change in this file
`` - go to the position before the last jump
:ju[mps] - list of jumps
Ctrl + i - go to newer position in jump list
Ctrl + o - go to older position in jump list
:changes - list of changes
g, - go to newer position in change list
g; - go to older position in change list
Ctrl + ] - jump to the tag under cursor
Tip To jump to a mark you can either use a backtick (`) or an apostrophe (').
Using an apostrophe jumps to the beginning (first non-blank) of the line holding the mark.

Macros

qa - record macro a
q - stop recording macro
@a - run macro a
@@ - rerun last run macro

Cut and paste

yy - yank (copy) a line
2yy - yank (copy) 2 lines
yw - yank (copy) the characters of the word from the cursor position to the start of the next word
yiw - yank (copy) word under the cursor
yaw - yank (copy) word under the cursor and the space after or before it
y$ or Y - yank (copy) to end of line
p - put (paste) the clipboard after cursor
P - put (paste) before cursor
gp - put (paste) the clipboard after cursor and leave cursor after the new text
gP - put (paste) before cursor and leave cursor after the new text
dd - delete (cut) a line
2dd - delete (cut) 2 lines
dw - delete (cut) the characters of the word from the cursor position to the start of the next word
diw - delete (cut) word under the cursor
daw - delete (cut) word under the cursor and the space after or before it
:3,5d - delete lines starting from 3 to 5
Tip You can also use the following characters to specify the range:
e.g.
:.,$d - From the current line to the end of the file
:.,1d - From the current line to the beginning of the file
:10,1d - From the 10th line to the beginning of the file
:g/{pattern}/d - delete all lines containing pattern
:g!/{pattern}/d - delete all lines not containing pattern
d$ or D - delete (cut) to the end of the line
x - delete (cut) character

Indent text

>> - indent (move right) line one shiftwidth
<< - de-indent (move left) line one shiftwidth
>% - indent a block with () or {} (cursor on brace)
<% - de-indent a block with () or {} (cursor on brace)
>ib - indent inner block with ()
>at - indent a block with <> tags
3== - re-indent 3 lines
=% - re-indent a block with () or {} (cursor on brace)
=iB - re-indent inner block with {}
gg=G - re-indent entire buffer
]p - paste and adjust indent to current line

Exiting

:w - write (save) the file, but don't exit
:w !sudo tee % - write out the current file using sudo
:wq or :x or ZZ - write (save) and quit
:q - quit (fails if there are unsaved changes)
:q! or ZQ - quit and throw away unsaved changes
:wqa - write (save) and quit on all tabs

Search and replace

/pattern - search for pattern
?pattern - search backward for pattern
\vpattern - 'very magic' pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)
n - repeat search in same direction
N - repeat search in opposite direction
:%s/old/new/g - replace all old with new throughout file
:%s/old/new/gc - replace all old with new throughout file with confirmations
:noh[lsearch] - remove highlighting of search matches

Search in multiple files

:vim[grep] /pattern/ {`{file}`} - search for pattern in multiple files
e.g. :vim[grep] /foo/ **/*
:cn[ext] - jump to the next match
:cp[revious] - jump to the previous match
:cope[n] - open a window containing the list of matches
:ccl[ose] - close the quickfix window

Tabs

:tabnew or :tabnew {page.words.file} - open a file in a new tab
Ctrl + wT - move the current split window into its own tab
gt or :tabn[ext] - move to the next tab
gT or :tabp[revious] - move to the previous tab
#gt - move to tab number #
:tabm[ove] # - move current tab to the #th position (indexed from 0)
:tabc[lose] - close the current tab and all its windows
:tabo[nly] - close all tabs except for the current one
:tabdo command - run the command on all tabs (e.g. :tabdo q - closes all opened tabs)

Working with multiple files

:e[dit] file - edit a file in a new buffer
:bn[ext] - go to the next buffer
:bp[revious] - go to the previous buffer
:bd[elete] - delete a buffer (close a file)
:b[uffer]# - go to a buffer by index #
:b[uffer] file - go to a buffer by file
:ls or :buffers - list all open buffers
:sp[lit] file - open a file in a new buffer and split window
:vs[plit] file - open a file in a new buffer and vertically split window
:vert[ical] ba[ll] - edit all buffers as vertical windows
:tab ba[ll] - edit all buffers as tabs
Ctrl + ws - split window
Ctrl + wv - split window vertically
Ctrl + ww - switch windows
Ctrl + wq - quit a window
Ctrl + wx - exchange current window with next one
Ctrl + w= - make all windows equal height & width
Ctrl + wh - move cursor to the left window (vertical split)
Ctrl + wl - move cursor to the right window (vertical split)
Ctrl + wj - move cursor to the window below (horizontal split)
Ctrl + wk - move cursor to the window above (horizontal split)
Ctrl + wH - make current window full height at far left (leftmost vertical window)
Ctrl + wL - make current window full height at far right (rightmost vertical window)
Ctrl + wJ - make current window full width at the very bottom (bottommost horizontal window)
Ctrl + wK - make current window full width at the very top (topmost horizontal window)

Diff

zf - manually define a fold up to motion
zd - delete fold under the cursor
za - toggle fold under the cursor
zo - open fold under the cursor
zc - close fold under the cursor
zr - reduce (open) all folds by one level
zm - fold more (close) all folds by one level
zi - toggle folding functionality
]c - jump to start of next change
[c - jump to start of previous change
do or :diffg[et] - obtain (get) difference (from other buffer)
dp or :diffpu[t] - put difference (to other buffer)
:diffthis - make current window part of diff
:dif[fupdate] - update differences
:diffo[ff] - switch off diff mode for current window

#######################################################################################################
Processing file: bash.functions
 _               _        __                  _   _                 
| |__   __ _ ___| |__    / _|_   _ _ __   ___| |_(_) ___  _ __  ___ 
| '_ \ / _` / __| '_ \  | |_| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
| |_) | (_| \__ \ | | |_|  _| |_| | | | | (__| |_| | (_) | | | \__ \
|_.__/ \__,_|___/_| |_(_)_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|___/
                                                                    
#
# bash functions
############################################################################################
# ./BashDirName.sh
############################################################################################
No need for basename, and especially no need for a subshell running pwd (which adds an extra, and expensive, fork operation); the shell can do this internally using parameter expansion:

result=${PWD##*/}          # to assign to a variable
result=${result:-/}        # to correct for the case where PWD=/

printf '%s\n' "${PWD##*/}" # to print to stdout
                           # ...more robust than echo for unusual names
                           #    (consider a directory named -e or -n)

printf '%q\n' "${PWD##*/}" # to print to stdout, quoted for use as shell input
                           # ...useful to make hidden characters readable.
Note that if you're applying this technique in other circumstances (not PWD, but some other variable holding a directory name), you might need to trim any trailing slashes. The below uses bash's extglob support to work even with multiple trailing slashes:

dirname=/path/to/somewhere//
shopt -s extglob           # enable +(...) glob syntax
result=${dirname%%+(/)}    # trim however many trailing slashes exist
result=${result##*/}       # remove everything before the last / that still remains
result=${result:-/}        # correct for dirname=/ case
printf '%s\n' "$result"


############################################################################################
# ./CheckIfFileExists.sh
############################################################################################
#Check if file exists

if [[ -f <file> ]]
then
    echo "<file> exists on your filesystem."
fi


# Check if file does not exist

if [[ ! -f <file> ]]
then
    echo "<file> does not exist on your filesystem."
fi


# Check if directory exist

if [[ -d "$DIRECTORY" ]]
then
    echo "$DIRECTORY exists on your filesystem."
fi



############################################################################################
# ./console.sh
############################################################################################
consolebar () {
    echo "********************************************************************************************"
}
consolemsg () {
#   consolebar
    echo "** $1"
#   consolebar
    A=$A
}
optconsolemsg () {
#    echo "** $1"
    A=$A
}


############################################################################################
# ./finddirectories.sh
############################################################################################
find . -type d


############################################################################################
# ./findfiles1g.sh
############################################################################################
find . -type f -size +1G 2>/dev/null | sed 's#^.#/tmp#'


############################################################################################
# ./findfiles2g.sh
############################################################################################
find . -type f -size +2G 2>/dev/null | sed 's#^.#/tmp#'


############################################################################################
# ./findfiles.sh
############################################################################################
find . -type f


############################################################################################
# ./find_secrets.sh
############################################################################################
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp1=/tmp/$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp"' EXIT
rm -f "$Tmp"  >/dev/null 2>&1

# Define patterns for sensitive data (expand as needed)
# patterns=(
#     "password[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?"  # Basic password pattern
#     "secret[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?"   # Secret pattern
#     "key[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?"      # Key pattern
#     "AWS_ACCESS_KEY_ID[[:space:]]*[:=][[:space:]]*[\"']?[A-Z0-9]*[\"']?" # AWS Access Key ID
#     "AWS_SECRET_ACCESS_KEY[[:space:]]*[:=][[:space:]]*[\"']?[a-zA-Z0-9/+=]*[\"']?" # AWS Secret Access Key
#     "api_key[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # API Key pattern
#     "database_url[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # Database URL
#     "connection_string[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # Connection String
#     "private_key[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # Private Key
#     "client_secret[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # Client Secret
#     "oauth_token[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # OAuth Token
#     "bearer_token[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # Bearer Token
# )
. ./secure_patterns

# Define file types to search (customize as needed)
file_types=("*.sh" "*.py" "*.js" "*.php" "*.html" "*.xml" "*.json" "*.txt" "*.conf" "*.yaml" "*.yml" "*.sh" "*.bash" "*.c" "*.cpp" "*.java" "*.go")


# Function to search a single file
search_file() {
    local file="$1"
    local line_num
    local line

    for pattern in "${patterns[@]}"; do
        while IFS= read -r line; do
            line_num=$((line_num + 1))
            if [[ "$line" =~ $pattern ]]; then
                echo "File: $file, Line: $line_num: $line, Pattern: $pattern" >> $Tmp
            fi
        done < "$file"
        line_num=0 # Reset line number for next pattern
    done
}

# Find files and search them
# find . \( -name "${file_types[@]}" \) -print0 | while IFS= read -r -d $'\0' file; do
find . \( -name "*.sh" \) -print0 | while IFS= read -r -d $'\0' file; do
    if [ -f "$file" ]; then # Check if it's a regular file (not a directory)
      search_file "$file"
    fi
done



if [ -f $Tmp ]; then
    echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    echo "!!!!    Secrets Found    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    cat $Tmp | sort | uniq
    exit 1
fi

echo "Finished searching."
exit 0


############################################################################################
# ./ForEachDirectory.sh
############################################################################################
for d in */ ; do
    echo "$d"
done


############################################################################################
# ./ForEachFile.sh
############################################################################################
for f in ./*.java; do MakeHTMLCodePage "$f"; done


############################################################################################
# ./fullpathd.sh
############################################################################################
find . -type d 2>/dev/null | sed 's#^.#/tmp#'


############################################################################################
# ./fullpath.sh
############################################################################################
find . -type f 2>/dev/null | sed 's#^.#/tmp#'


############################################################################################
# ./gitgraphlog.sh
############################################################################################
git log --graph --all --date=relative --pretty=format:'%Cred%h %Creset%<|(100,trunc)%s %C(bold blue)<%an>%Creset %Cgreen(%cd)%Creset%C(auto)%d'


############################################################################################
# ./IsFileEmpty.sh
############################################################################################
if [ -s /tmp/myfile.txt ]
then
     echo "File not empty"
else
     echo "File empty"
fi


############################################################################################
# ./IsHostUp.sh
############################################################################################

hostname_or_ip_address=$1
if ping -q -c 1 -W 1 wind2 >/dev/null 2>&1; then
    echo "$hostname_or_ip_address is alive"
else
    echo "$hostname_or_ip_address is pining for the fjords"
fi


############################################################################################
# ./isnfs.sh
############################################################################################
isnfs () {                                                                                                                       
    LOCAL=`stat -f -c %T "$1"`                                                                                                   
    if [ "$LOCAL" == "nfs" ]; then                                                                                               
         RETVAL="YES"                                                                                                             
    else                                                                                                                         
         RETVAL="NO"                                                                                                              
    fi                                                                                                                           
}


############################################################################################
# ./MonitorOpenNetstatConnections.sh
############################################################################################
watch -n 1 'netstat -tpanl | grep ESTABLISHED'


############################################################################################
# ./slapfilename.sh
############################################################################################
#!/usr/bin/bash
Tmp=/tmp/$$

if [ $# -eq 0 ]
  then
        rm -f ./taggerdo

        for filename in *.$1; do
            FILE="$filename"
            NAME="$filename"
            NAME=`echo "$NAME"     | sed "s/ \[.*\]//g"`
            NAME=`echo "$NAME"     | sed "s/^[&]//g"`
            NAME=`echo "$NAME"     | sed "s/[']//g"`
            NAME=`echo "$NAME" | sed "s/_/ /g"`
            NAME=`echo "$NAME" | sed "s/  / /g"`
            NAME=`echo "$NAME" | sed "s/  / /g"`
            NAME=`echo "$NAME" | sed "s/  / /g"`
            NAME=`echo "$NAME" | sed "s/^ //"`
            NAME=`echo "$NAME" | sed "s/^ //"`
            NAME=`echo "$NAME" | sed "s/^ //"`
            NAME=`echo "$NAME" | sed "s/ [.]mp3/.mp3/"`
            NAME=`echo "$NAME" | sed "s/ [.]mp3/.mp3/"`
            NAME=`echo "$NAME" | sed "s/ [.]mp3/.mp3/"`
           CMD="mv \"./$filename\" \"$NAME\""
           echo $CMD
           echo $CMD > ./taggerdo
           chmod 777  ./taggerdo
           ./taggerdo
           rm -f ./taggerdo
        done

fi


############################################################################################
# ./topTenCommands.sh
############################################################################################
history | awk '{CMD[$2]++;count++;}END { for (a in CMD)print CMD[a] " " CMD[a]/count*100 "% " a;}' | grep -v "./" | column -c3 -s " " -t | sort -nr | nl |  head -n10


############################################################################################
# ./update.sh
############################################################################################
rm -f zed zzed zerd qed qqed fed ffed xx yy xxx yyy moe

rm -f README.md
PART=header
echo "# $PART"      >> README.md
echo ""             >> README.md
echo "\`\`\`"       >> README.md
cat $PART           >> README.md
echo "\`\`\`"       >> README.md

PART=update
echo "# $PART"      >> README.md
echo ""             >> README.md
echo "\`\`\`"       >> README.md
cat $PART           >> README.md
echo "\`\`\`"       >> README.md

PART=getheader
echo "# $PART"      >> README.md
echo ""             >> README.md
echo "\`\`\`"       >> README.md
cat $PART           >> README.md
echo "\`\`\`"       >> README.md

cat README.md
git add README.md


echo "#"                      > bash.functions
echo "# bash functions"      >> bash.functions
for fn in ./*.sh; do
    echo "############################################################################################" >> bash.functions
    echo "# $fn"                 >> bash.functions
    echo "############################################################################################" >> bash.functions
    cat "$fn"                    >> bash.functions
    echo ""                      >> bash.functions
    echo ""                      >> bash.functions
done
git add bash.functions


git status
git add -u;git commit  -m "Update"
git push -u origin master

cp ./getheader       /etc/center
cp ./bash.functions  /etc/center





############################################################################################
# ./UpperToLowerCase.sh
############################################################################################
str="Hello World"
lowerStr=$(echo "$str" | tr '[:upper:]' '[:lower:]')
 
echo "Input String: $str"
echo "Result String:  $lowerStr"


############################################################################################
# ./WatchCpuProcesses.sh
############################################################################################
watch -n 1 'ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head'



#######################################################################################################
Processing file: bash.justhelp
 _               _        _           _   _          _       
| |__   __ _ ___| |__    (_)_   _ ___| |_| |__   ___| |_ __  
| '_ \ / _` / __| '_ \   | | | | / __| __| '_ \ / _ \ | '_ \ 
| |_) | (_| \__ \ | | |_ | | |_| \__ \ |_| | | |  __/ | |_) |
|_.__/ \__,_|___/_| |_(_)/ |\__,_|___/\__|_| |_|\___|_| .__/ 
                       |__/                           |_|    
#================================================================
# HEADER
#=====================:===========================================
#% SYNOPSIS
#+    ${SCRIPT_NAME} [-hv] [-o[file]] args ...
#%
#% DESCRIPTION
#%    This is a script template
#%    to start any good shell script.
#%
#% OPTIONS
#%    -o [file], --output=[file]    Set log file (default=/dev/null)
#%                                  use DEFAULT keyword to autoname file
#%                                  The default value is /dev/null.
#%    -t, --timelog                 Add timestamp to log ("+%y/%m/%d@%H:%M:%S")
#%    -x, --ignorelock              Ignore if lock file exists
#%    -h, --help                    Print this help
#%    -v, --version                 Print script information
#%
#% EXAMPLES
#%    ${SCRIPT_NAME} -o DEFAULT arg1 arg2
#%
#================================================================
#- IMPLEMENTATION
#-    version         ${SCRIPT_NAME} 0.0.1
#-    author          MJE
#-    copyright       Copyright (c) All Rights Reserved
#-    license         All Rights Reserved
#-    script_id       0.0.1
#-
#================================================================
#  HISTORY
#     2024/12/30 : XXX : Script creation
# 
#================================================================
#  DEBUG OPTION
#    set -n  # Uncomment to check your syntax, without execution.
#    set -x  # Uncomment to debug this shell script
#
#================================================================
# END_OF_HEADER
#================================================================

#== needed variables ==#
SCRIPT_HEADSIZE=$(head -200 ${0} |grep -n "^# END_OF_HEADER" | cut -f1 -d:)
SCRIPT_NAME="$(basename ${0})"

#== usage functions ==#
usage() { printf "Usage: "; head -${SCRIPT_HEADSIZE:-99} ${0} | grep -e "^#+" | sed -e "s/^#+[ ]*//g" -e "s/\${SCRIPT_NAME}/${SCRIPT_NAME}/g" ; }
usagefull() { head -${SCRIPT_HEADSIZE:-99} ${0} | grep -e "^#[%+-]" | sed -e "s/^#[%+-]//g" -e "s/\${SCRIPT_NAME}/${SCRIPT_NAME}/g" ; }
scriptinfo() { head -${SCRIPT_HEADSIZE:-99} ${0} | grep -e "^#-" | sed -e "s/^#-//g" -e "s/\${SCRIPT_NAME}/${SCRIPT_NAME}/g"; }

#######################################################################################################
Processing file: bash.library
 _               _       _ _ _                          
| |__   __ _ ___| |__   | (_) |__  _ __ __ _ _ __ _   _ 
| '_ \ / _` / __| '_ \  | | | '_ \| '__/ _` | '__| | | |
| |_) | (_| \__ \ | | |_| | | |_) | | | (_| | |  | |_| |
|_.__/ \__,_|___/_| |_(_)_|_|_.__/|_|  \__,_|_|   \__, |
                                                  |___/ 
# *********************************************************DATEOMATIC: Mon Mar 24 11:21:36 EDT 2025
# *********************************************************HASHOMATIC: c8ade33411894a2b0873038ea166f75c
DEBUGLEVEL=1

function repeat_char() {
  local char="$1"
  local count="$2"
  local result=""

  if [[ -z "$char" || -z "$count" ]]; then
    echo "Usage: repeat_char <character> <count>" >&2
    return 1
  fi

  if [[ "$count" -lt 0 ]]; then
    echo "Count must be a non-negative integer." >&2
    return 1
  fi

  for ((i = 0; i < count; i++)); do
    result+="$char"
  done

  echo "$result"
}
function longest_string_length() {
  local max_length=0
  local current_length
  local line

  while IFS= read -r line; do
    current_length=${#line}
    if [[ $current_length -gt $max_length ]]; then
      max_length=$current_length
    fi
  done

  echo "$max_length"
}
function fecho() {
  echo "$FUNCNAME : $1 $2 $3 $4 $5"
}
function fdebug() {
    if [ "$DEBUGLEVEL" -gt "0" ]; then
        echo "DBG $FUNCNAME : $1 $2 $3 $4 $"
    fi
}
# show up to 3 parent dirs, except ~, resolve all other dir aliases
function git_toplevel() {
     if [ -d ".git" ]; then
         git rev-parse --show-toplevel 2> /dev/null | sed -e "s,^$HOME,~,"
     fi
}
function git_branch() {
     #git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
     if [ -d ".git" ]; then
         git branch 2> /dev/null | sed 's/^..//' | sed 's/master/m/'
     fi
}
function git_origin() {
     # git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
     if [ -d ".git" ]; then
         git config --get remote.origin.url 2> /dev/null
     fi
}
function git_originsync() {
     if [ -d ".git" ]; then
         git config color.ui false
         git branch -vv 2> /dev/null |  gawk 'match($0, /\[([^\]]+)\]/, a) { print a[1] }' | sed 's/origin/o/' | sed 's/master/m/' | sed 's/ ahead /+/'
     else
         echo ""
     fi
}
function collapse_pwd() {
    curr_pwd=$(pwd | sed -e "s,^$HOME,~,")
    echo $curr_pwd
}
function collapse_hostname() {
    curr_hostname=$(hostname)
    echo $curr_hostname
}

function backup_file() {
  local filename="$1"
  local backup_dir="$2" # New argument for backup directory
  local timestamp=$(date +%Y%m%d%H%M%S)
  local backup_filename="${filename##*/}.backup.${timestamp}" # Extract filename only
  local backup_path="${backup_dir}/${backup_filename}"

  if [ -f "$filename" ]; then
    if [ -d "$backup_dir" ]; then # Check if backup directory exists
      cp "$filename" "$backup_path"
      #echo "File '$filename' backed up to '$backup_path'."
    else
      #echo "Error: Backup directory '$backup_dir' does not exist."
      return 1
    fi

  else
    #echo "Error: File '$filename' not found."
    return 1
  fi
}
# Example usage:
# backup_file my_file.txt /path/to/backup/directory


# ****************************************************************************************************
# ****************************************************************************************************

# --- String Manipulation ---

# Trims leading and trailing whitespace from a string.
function trim() {
  local str="$1"
  printf "%s" "${str#"${str%%[![:space:]]*}"}" "${str%"${str##*[![:space:]]}"}"
}
remove_leading_whitespace() {
         local input="$1"       # Bash-Function-Args
  local output="${input#"${input%%[![:space:]]*}"}"
  echo "$output"
}

# Checks if a string starts with a given prefix.
function starts_with() {
         local string="$1";local prefix="$2"  # Bash-Function-Args
  [[ "$string" == "$prefix"* ]]
}

# Checks if a string ends with a given suffix.
function ends_with() {
         local string="$1";local suffix="$2"  # Bash-Function-Args
  [[ "$string" == *"$suffix" ]]
}

# Checks if a string contains a substring.
function contains() {
         local string="$1";local substring="$2"  # Bash-Function-Args
  [[ "$string" == *"$substring"* ]]
}

# Replaces all occurrences of a substring in a string.
function replace() {
         local string="$1";local old="$2";local new="$3"  # Bash-Function-Args
  printf "%s\n" "${string//$old/$new}"
}

# Extracts a substring based on start and end indices. (1-based indexing)
function substring() {
         local string="$1";local start="$2";local length="$3"  # Bash-Function-Args
  if [[ -z "$length" ]]; then
    printf "%s\n" "${string:$((start - 1))}"
  else
    printf "%s\n" "${string:$((start - 1)):$length}"
  fi
}

# --- File and Directory Operations ---

# Creates a directory if it doesn't exist.
function mkdir_p() {
  mkdir -p "$1"
}

# Checks if a file or directory exists.
function exists() {
  [[ -e "$1" ]]
}

# Checks if a file exists.
function is_file() {
  [[ -f "$1" ]]
}

# Checks if a directory exists.
function is_dir() {
  [[ -d "$1" ]]
}

# Gets the absolute path of a file or directory.
function abspath() {
  local path="$1"
  if [[ -z "$path" ]]; then
    pwd
  else
    realpath "$path"
  fi
}

# Gets the filename from a path.
function basename() {
  local path="$1"
  printf "%s\n" "$(basename "$path")"
}

# Gets the directory from a path.
function dirname() {
  local path="$1"
  printf "%s\n" "$(dirname "$path")"
}

# Gets the file extension from a path.
function extension() {
  local path="$1"
  printf "%s\n" "${path##*.}"
}

# Copies a file or directory recursively.
function cp_r() {
  cp -r "$1" "$2"
}

# Moves a file or directory.
function mv_f() {
  mv -f "$1" "$2"
}

# Removes a file or directory recursively.
function rm_rf() {
  rm -rf "$1"
}

# --- System and Process Utilities ---

# Checks if a command is available.
function command_exists() {
  command -v "$1" &> /dev/null
}

# Gets the process ID (PID) of a process by name.
function pidof_name() {
         local name="$1"               # Bash-Function-Args
  pidof "$name"
}

# Kills a process by name.
function kill_name() {
         local name="$1"               # Bash-Function-Args
  pkill "$name"
}

# Kills a process by PID.
function kill_pid() {
         local pid="$1"               # Bash-Function-Args
  kill "$pid"
}

# Runs a command and returns its exit code.
function run_and_exit_code() {
  "$@"
  echo $?
}

# Runs a command and returns its output.
function run_and_output() {
  "$@"
}

#Runs a command and returns its error.
function run_and_error() {
  "$@" 2>&1 >/dev/null
}
# --- Array Manipulation ---

# Checks if an array contains a value.
function array_contains() {
         local needle="$1"               # Bash-Function-Args
  shift
  local haystack=("${@}")
  local found=0
  for item in "${haystack[@]}"; do
    if [[ "$item" == "$needle" ]]; then
      found=1
      break
    fi
  done
  if [[ $found -eq 1 ]]; then
    return 0 # True
  else
    return 1 # False
  fi
}

# Joins array elements with a delimiter.
function array_join() {
         local delimiter="$1"               # Bash-Function-Args
  shift
  local array=("${@}")
  local IFS="$delimiter"
  echo "${array[*]}"
}

# --- Networking ---

# Checks if a host is reachable.
function is_reachable() {
  ping -c 1 -W 1 "$1" &> /dev/null
}

# Checks if a port is open.
# is_port_open() {
#   timeout 1 bash -c '</dev/tcp/'"$1"'/'"$2" 2>/dev/null'
# }

# --- Input/Output ---

# Prints a message to stderr.
function eprint() {
  echo "$1" >&2
}

# Reads a line from stdin with a prompt.
function read_prompt() {
  read -p "$1" "$2"
}

# --- Time and Date ---

# Gets the current timestamp in milliseconds.
function timestamp_ms() {
  date +%s%3N
}

function scan_for_secrets() {
         local file="$1"               # Bash-Function-Args

  if [[ -z "$file" ]]; then
    echo "Usage: scan_for_secrets <file>"
    return 1
  fi

  if [[ ! -f "$file" ]]; then
    echo "Error: File '$file' not found."
    return 1
  fi

  # Define patterns to search for (add/modify as needed)
  local patterns=(
    "API_KEY=[a-zA-Z0-9_-]{20,}"
    "SECRET_KEY=[a-zA-Z0-9_-]{20,}"
    "PASSWORD=[a-zA-Z0-9_-]{8,}"
    "AWS_ACCESS_KEY_ID=[A-Z0-9]{20}"
    "AWS_SECRET_ACCESS_KEY=[A-Za-z0-9+/]{40}"
    "ssh-rsa [A-Za-z0-9+/=]{20,}"
    "ssh-ed25519 [A-Za-z0-9+/=]{20,}"
    "-----BEGIN RSA PRIVATE KEY-----"
    "-----BEGIN PGP PRIVATE KEY BLOCK-----"
    "-----BEGIN OPENSSH PRIVATE KEY-----"
    "Bearer [A-Za-z0-9._-]{20,}"
    "Authorization: Basic [A-Za-z0-9+/=]{20,}"
    "Authorization: Token [A-Za-z0-9]{20,}"
    "[a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+" #look for username:password type strings.
    "PGPASSWORD=[a-zA-Z0-9_-]{8,}" # postgres password
    "DATABASE_URL=postgres://[a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+@" # postgres database url, catches username and password.
    "MONGO_URI=mongodb://[a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+@" #mongodb uri, catches username and password
    "password[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?"  # Basic password pattern
    "secret[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?"   # Secret pattern
    "key[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?"      # Key pattern
    "AWS_ACCESS_KEY_ID[[:space:]]*[:=][[:space:]]*[\"']?[A-Z0-9]*[\"']?" # AWS Access Key ID
    "AWS_SECRET_ACCESS_KEY[[:space:]]*[:=][[:space:]]*[\"']?[a-zA-Z0-9/+=]*[\"']?" # AWS Secret Access Key
    "api_key[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # API Key pattern
    "database_url[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # Database URL
    "connection_string[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # Connection String
    "private_key[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # Private Key
    "client_secret[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # Client Secret
    "oauth_token[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # OAuth Token
    "bearer_token[[:space:]]*[:=][[:space:]]*[\"']?[^\"']*[\"']?" # Bearer Token
  )

    # "export [A-Z_]+=[\"']?[A-Za-z0-9_\\-./+=@$%^&*()!~`?<>:;']+" # look for exported environment variables.
  local found=0

  for pattern in "${patterns[@]}"; do
    if grep -E "$pattern" "$file" > /dev/null; then
      found=1
      echo "Potential secret found in '$file' matching pattern: '$pattern'"
      grep -E "$pattern" "$file"
    fi
  done

  if [[ "$found" -eq 0 ]]; then
    echo "No potential secrets found in '$file'."
  fi

  return 0
}

function isSameHash() {
    local FILE="$1"               # Bash-Function-Args
    local tmp=/tmp/HASHCHECK_$$
    local CH=$(md5sum "$FILE" | awk '{print $1}')
    if [[ "$CH" == "$OH" ]]; then
        echo "1"
    else
        echo "0"
    fi
}

function padout_file_lines() {
         local filename="$1"    # Bash-Function-Args
  local tmp1=$(mktemp)
  local tmp2=$(mktemp)
  rm -f "$tmp1" >/dev/null 2>&1
  rm -f "$tmp2" >/dev/null 2>&1

  if [[ -z "$filename" ]]; then
    fecho "Error: Filename not provided."
    return 1
  fi

  if [[ ! -f "$filename" ]]; then
    fecho "Error: File '$filename' not found."
    return 1
  fi

  sed 's/[[:space:]]*$//' "$filename"  > "$tmp1"
  max_len=$(wc -L "$tmp1" | awk '{print $1}')
  padding_length=$((max_len + 0))

  # Iterate through each line of the file and pad it
  rm -f "$tmp2" >/dev/null 2>&1
  while IFS= read -r line; do
    printf "%-${padding_length}s\n" "$line" >> "$tmp2" # Pad to the right
  done < "$tmp1"

  mv "$tmp2" "$filename"

  rm -f "$tmp1" >/dev/null 2>&1
  rm -f "$tmp2" >/dev/null 2>&1
  return 0
}


# Example usage (if you want to run it directly from the script):
# if [[ "$0" == "$BASH_SOURCE" ]]; then
#   if [[ $# -eq 1 ]]; then
#     scan_for_secrets "$1"
#   else
#     echo "Usage: $0 <file>"
#     exit 1
#   fi
# fi

# Function to split a file into N files
function split_file_n() {
         local input_file="$1";local num_files="$2" # Bash-Function-Args
  local prefix="${3:-split_}" # Default prefix is "split_"

  if [[ -z "$input_file" || -z "$num_files" ]]; then
    echo "Usage: split_file_n <input_file> <number_of_files> [prefix]"
    return 1
  fi

  if [[ ! -f "$input_file" ]]; then
    echo "Error: Input file '$input_file' not found."
    return 1
  fi

  if ! [[ "$num_files" =~ ^[0-9]+$ ]]; then
      echo "Error: Number of files must be a positive integer."
      return 1
  fi

  local total_lines=$(wc -l < "$input_file")
  local lines_per_file=$((total_lines / num_files))
  local remainder=$((total_lines % num_files))

  local start_line=1
  for ((i=1; i<=num_files; i++)); do
    local output_file="${prefix}${i}"
    local current_lines=$lines_per_file

    if [[ $i -le $remainder ]]; then
      ((current_lines++)) # Distribute remainder lines
    fi

    head -n "$((start_line + current_lines - 1))" "$input_file" | tail -n "$current_lines" > "$output_file"

    ((start_line += current_lines))
  done
}

# Example usage (if you want to test it from the script itself):
# if [[ "$0" == "$BASH_SOURCE" ]]; then
#   if [[ $# -ge 2 ]]; then
#     split_file_n "$1" "$2" "${3:-split_}"
#   else
#     echo "Usage: $0 <input_file> <number_of_files> [prefix]"
#   fi
# fi

function truncate_file_lines() {
         local filename="$1";local num_chars="$2" # Bash-Function-Args

  if [[ -z "$filename" ]]; then
    echo "Truncate Error: Filename not provided."
    return 1
  fi

  if [[ ! -f "$filename" ]]; then
    echo "Truncate Error: File '$filename' not found."
    return 1
  fi

  if [[ -z "$num_chars" ]]; then
    echo "Truncate Error: Number of characters not provided."
    return 1
  fi

  if ! [[ "$num_chars" =~ ^[0-9]+$ ]]; then
    echo "Truncate Error: Number of characters must be a positive integer."
    return 1
  fi
  if [[ "$num_chars" == "0" ]]; then
    return 0
  fi

  local temp_file=$(mktemp)

  while IFS= read -r line; do
    printf "%.${num_chars}s\n" "$line" >> "$temp_file"
  done < "$filename"

  mv "$temp_file" "$filename"

  return 0
}

function string_before_file_lines() {
         local filename="$1";local str="$2" # Bash-Function-Args

  if [[ -z "$filename" ]]; then
    echo "string_before Error: Filename not provided."
    return 1
  fi

  if [[ ! -f "$filename" ]]; then
    echo "string_before Error: File '$filename' not found."
    return 1
  fi

  if [[ -z "$str" ]]; then
    echo "string_before Error: Number of characters not provided."
    return 1
  fi

  local temp_file=$(mktemp)

  while IFS= read -r line; do
    printf "${str}%s\n" "$line" >> "$temp_file"
  done < "$filename"

  mv "$temp_file" "$filename"

  return 0
}
function string_after_file_lines() {
         local filename="$1";local str="$2" # Bash-Function-Args

  if [[ -z "$filename" ]]; then
    echo "string_before Error: Filename not provided."
    return 1
  fi

  if [[ ! -f "$filename" ]]; then
    echo "string_before Error: File '$filename' not found."
    return 1
  fi

  if [[ -z "$str" ]]; then
    echo "string_before Error: Number of characters not provided."
    return 1
  fi

  local temp_file=$(mktemp)

  while IFS= read -r line; do
    printf "%s${str}\n" "$line" >> "$temp_file"
  done < "$filename"

  mv "$temp_file" "$filename"

  return 0
}

function sort_file() {
         local filename="$1"; local str="$2" # Bash-Function-Args

  if [[ -z "$filename" ]]; then
    fecho "Error: Filename not provided."
    return 1
  fi

  if [[ ! -f "$filename" ]]; then
    fecho "Error: File '$filename' not found."
    return 1
  fi
  if [[ -z "$str" ]]; then
    fecho "Error: Control word not provided."
    return 1
  fi

  if [[ "$str" == "" ]]; then
      NOTHING=0
  else
      local tmp1=$(mktemp)
      cat "$filename" | sort > "$tmp1"
      mv "$tmp1" "$filename"
  fi

  return 0
}

function justify_line() {
         local str="$1"; local num="$2" # Bash-Function-Args

    local tmp1=$(mktemp)
    echo "$1" | gawk -v num=$2 '
        function justify(szIn,  l,n,i,sz,m,k,A, flag) {
            sz = "";
            n =  split(szIn,A," ");
            r = 1
            delim = ""
            flag=0
            for (i=1; i<=n; i++) {
                sz = delim sz A[i] " ";
                delim = ""
                l = l + length(A[i] " ");
                if (l > (num*r)) {
                    r=r+1;
                    sz = sz "\n"
                    flag=1
                    delim = ""
                }
            }
            if (flag == 1) sz = sz "\n"
            return sz;
        }
        {
            print justify($0);
        }' > "$tmp1"

    cat "$tmp1"
    rm -f "$tmp1" >/dev/null 2>&1
}
function justify_file() {
         local filename="$1";local num="$2" # Bash-Function-Args

  if [[ -z "$filename" ]]; then
    echo "Truncate Error: Filename not provided."
    return 1
  fi

  if [[ ! -f "$filename" ]]; then
    echo "Truncate Error: File '$filename' not found."
    return 1
  fi

  if [[ -z "$num" ]]; then
    echo "Truncate Error: Number of characters not provided."
    return 1
  fi

  if ! [[ "$num" =~ ^[0-9]+$ ]]; then
    echo "Truncate Error: Number of characters must be a positive integer."
    return 1
  fi
  if [[ "$num" == "0" ]]; then
    return 0
  fi

  local temp_file=$(mktemp)

  while IFS= read -r line; do
    justify_line "$line" "$num" >> "$temp_file"
  done < "$filename"

  mv "$temp_file" "$filename"

  return 0
}

function indent_file() {
         local filename="$1"   # Bash-Function-Args

  if [[ -z "$filename" ]]; then
    fecho "Error: Filename not provided."
    return 1
  fi

  if [[ ! -f "$filename" ]]; then
    fecho "Error: File '$filename' not found."
    return 1
  fi

  local temp_file=$(mktemp)

  while IFS= read -r line; do
    echo "    $line" >> "$temp_file"
  done < "$filename"

  mv "$temp_file" "$filename"

  return 0
}
function trim_leading_whitespace_file() {
         local filename="$1"            # Bash-Function-Args
  local sz=""

  if [[ -z "$filename" ]]; then
    fecho "Error: Filename not provided."
    return 1
  fi

  if [[ ! -f "$filename" ]]; then
    fecho "Error: File '$filename' not found."
    return 1
  fi

  local temp_file=$(mktemp)

  while IFS= read -r line; do
    remove_leading_whitespace "$line" >> "$temp_file"
  done < "$filename"

  mv "$temp_file" "$filename"

  return 0
}
function create_markdown_table4() {
         local input_file="$1";local str="$2"                   # Bash-Function-Args
  local tmp=$(mktemp)
  local LEN=""
  local STRING=""

  # Check if the input file exists
  if [[ ! -f "$input_file" ]]; then
    fecho "Error: Input file '$input_file' not found."
    return 1
  fi

  LEN=`longest_string_length < "$input_file"`
  STRING=`repeat_char "-" "24"`

  rm -f "$tmp" >/dev/null 2>&1
  if [[ "$str" == "MAKELINKS" ]]; then
      cat "$input_file" |sort|uniq|gawk '{n=split($0,A,"/");print "[" A[n] "](" $0 ")";}' > $tmp
  else
      cat "$input_file" |sort|uniq > $tmp
  fi

  # Read lines from the file and create table rows
  local line_count=0
  local row=""
  local first_row=1

  while IFS= read -r line; do
    if [[ $line_count -eq 0 ]]; then
      if [[ $first_row -eq 1 ]]; then
          echo "| $STRING | $STRING | $STRING | $STRING |"
          echo "|----------|----------|----------|----------|"
          first_row=0
      fi
    fi

    row+="| $line "

    line_count=$((line_count + 1))

    if [[ $line_count -eq 4 ]]; then
      echo "$row|"
      row=""
      line_count=0
    fi
  done < "$tmp"

  # Handle remaining lines if the total line count is not a multiple of 5
  if [[ $line_count -gt 0 ]]; then
    for ((i = line_count; i < 5; i++)); do
        row+="|  "
    done
    echo "$row|"
  fi
}

#######################################################################################################
Processing file: bashrc.shared
 _               _                    _                        _ 
| |__   __ _ ___| |__  _ __ ___   ___| |__   __ _ _ __ ___  __| |
| '_ \ / _` / __| '_ \| '__/ __| / __| '_ \ / _` | '__/ _ \/ _` |
| |_) | (_| \__ \ | | | | | (__ _\__ \ | | | (_| | | |  __/ (_| |
|_.__/ \__,_|___/_| |_|_|  \___(_)___/_| |_|\__,_|_|  \___|\__,_|
                                                                 
# *********************************************************DATEOMATIC: Mon Mar 24 11:21:36 EDT 2025
# *********************************************************HASHOMATIC: 54a9bc07a629dfb2173395753b1dd926
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

#export PS1='$(collapse_hostname)$(collapse_pwd)$(git_origin)$(git_branch)\n>> '
#export PS1='$(git_origin)$(git_branch)\n$(collapse_hostname)$(collapse_pwd)>> '
export PS1='$(collapse_hostname) $(collapse_pwd) ($(git_toplevel):$(git_branch):$(git_originsync))>> '

alias ls='ls -t'
alias scm='cd /etc/scm'
alias center='cd /etc/center'
alias cgi='cd /var/www/cgi'
alias grep='grep --color=never'
alias qgrep='grep -nHP --color=none'
alias qg='grep -nHP --color=none'
alias fullpath='find . -type f 2>/dev/null | sed "s#^.#$(pwd)#"'
alias fullpathd='find . -type d 2>/dev/null | sed "s#^.#$(pwd)#"'

export FC1="~/1.fc"
export FC2="~/2.fc"
export FC3="~/applog"
export FC4="~/vimlog"
export FC5="./notes"
export VIMSESSIONDEFAULT=~/.vimsessiondefault
# Just the name part here
export VIMSESSION=.vim
export VIMWINDOW=.vim
export VIMSPLIT=.vim
export VIMWINDOWS=.vimwindows
export VIMLAYOUT=.vimlayout
export VIMNOSPLITS=.vimnosplits
export VIMSPLITCMDS="vsplit | split | vertical resize 53"
export VIMTEMPLATES="~/TPLS/"

#######################################################################################################
Processing file: bashtop
 _               _     _              
| |__   __ _ ___| |__ | |_ ___  _ __  
| '_ \ / _` / __| '_ \| __/ _ \| '_ \ 
| |_) | (_| \__ \ | | | || (_) | |_) |
|_.__/ \__,_|___/_| |_|\__\___/| .__/ 
                               |_|    
#!/usr/bin/bash
# *********************************************************DATEOMATIC: Wed Feb 26 00:01:17 EST 2025
# *********************************************************HASHOMATIC: 77817de3816b3a115eaec6bb1cc34eea
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp0" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3"  >/dev/null 2>&1;

UPDATE="NO"
while getopts "cur:" arg
do
    case $arg in
        c) clear
           ;;
        u) UPDATE="YES"
           exit 0
           ;;
        r) OA="$OPTARG"
           exit 0
           ;;
    esac
done
shift $(($OPTIND - 1))

# Check if the number of arguments is correct
if [ $# -ne 2 ]; theni
  echo "Usage: $0 <arg1> <arg2>"
  echo "Error: Incorrect number of arguments."
  exit 1  # Exit with an error code
fi
arg1="$1"
arg2="$2"

if [ "$UPDATE" == "YES" ]; then                                                                                               
    RETVAL="YES"                                                                                                             
else                                                                                                                         
    RETVAL="NO"                                                                                                              
fi                                                                                                                           

full_filename="$1"
filename=$(basename "$full_filename")
directory=$(dirname "$full_filename")
extension="${filename##*.}" # Remove everything up to the last dot
if [ "$extension" == "$filename" ]; then # No extension found
  extension=""
fi
filename_no_ext="${filename%.*}" # Remove everything after the last dot
file_size=$(stat -c %s "$full_filename")
file_permissions=$(stat -c %a "$full_filename")
file_owner=$(stat -c %U "$full_filename")
last_modified=$(stat -c %y "$full_filename")
last_access=$(stat -c %x "$full_filename")
file_type=$(file -b --mime-type "$full_filename")


#######################################################################################################
Processing file: colomatic
           _                       _   _      
  ___ ___ | | ___  _ __ ___   __ _| |_(_) ___ 
 / __/ _ \| |/ _ \| '_ ` _ \ / _` | __| |/ __|
| (_| (_) | | (_) | | | | | | (_| | |_| | (__ 
 \___\___/|_|\___/|_| |_| |_|\__,_|\__|_|\___|
                                              
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp1=/tmp/$$_$$
Tmp2=/tmp/$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp"  >/dev/null 2>&1
rm -f "$Tmp1"  >/dev/null 2>&1
rm -f "$Tmp2"  >/dev/null 2>&1
rm -f "$Tmp3"  >/dev/null 2>&1
#================================================================
# paste -d' ' file1 file2 > output_file

source ~/bash.library

function implColomatic() {
    local tmp1="/tmp/temp_$$"
    local tmp2="/tmp/temp_$$_$$"
    local tmp3="/tmp/temp_$$_$$_$$"

    # Get the filename from the command-line argument
    local filename1="$1"
    local filename2="$2"

    # Check if a filename is are provided
    if [ -z "$filename1" ]; then
      echo "Usage: <filename> <filename>"
      exit 1
    fi
    if [ -z "$filename2" ]; then
      echo "Usage: <filename> <filename>"
      exit 1
    fi

    # Check if the files exist
    if [ ! -f "$filename1" ]; then
      echo "Error: File '$filename' not found."
      exit 1
    fi
    if [ ! -f "$filename2" ]; then
      echo "Error: File '$filename' not found."
      exit 1
    fi
    cat "$filename1" > $tmp1
    cat "$filename2" > $tmp2

    if [ "$DELIM" == "," ]; then                                                                                               
        paste "$tmp1" "$tmp2" | sed 's/\t/,/g'
    else
        if [ "$BAR" == "|" ]; then                                                                                               
            paste "$tmp1" "$tmp2" | sed 's/\t//g'
        else
            paste "$tmp1" "$tmp2" | sed 's/\t/ /g'
        fi
    fi
    rm -f "$tmp1" >/dev/null 2>&1
    rm -f "$tmp2" >/dev/null 2>&1
    rm -f "$tmp3" >/dev/null 2>&1
}

DELIM=" "
BAR=" "
SORT=""
W=0
while getopts "sbn:2:3:4:5:c" arg
do
    case $arg in
        s) SORT="YES"
           ;;
        b) BAR="|"
           ;;
        n) W=$OPTARG
           ;;
        2) DELIM=""
           rm -f "split_0" "split_1" "split_2" "split_3" "split_4" "split_5" >/dev/null 2>&1
           cp "$OPTARG" "split_0"
           trim_leading_whitespace_file "split_0"
           justify_file "split_0" "44"
           sort_file "split_0" "$SORT"
#           indentomatic -f split_0 
           split_file_n "split_0" "2" "split_"
           truncate_file_lines "split_1" $W 
               padout_file_lines "split_1"
               string_before_file_lines "split_1" "$BAR"
           truncate_file_lines "split_2" $W 
               padout_file_lines "split_2"
               string_before_file_lines "split_2" "$BAR"
               string_after_file_lines  "split_2" "$BAR"

           implColomatic "split_1"    "split_2"    "$DELIM"
           rm -f "split_0" "split_1" "split_2" "split_3" "split_4" "split_5" >/dev/null 2>&1
           exit 0
           ;;
        3) DELIM=" "
           rm -f "split_0" "split_1" "split_2" "split_3" "split_4" "split_5" >/dev/null 2>&1
           cp "$OPTARG" "split_0"
           sort_file "split_0" "$SORT"
           split_file_n "split_0" "3" "split_"
           truncate_file_lines "split_1" $W 
               padout_file_lines "split_1"
                   string_before_file_lines "split_1" "$BAR"
           truncate_file_lines "split_2" $W 
               padout_file_lines "split_2"
                   string_before_file_lines "split_2" "$BAR"
           truncate_file_lines "split_3" $W 
               padout_file_lines "split_3"
                   string_before_file_lines "split_3" "$BAR"
                   string_after_file_lines  "split_3" "$BAR"

           implColomatic "split_1"    "split_2"    "$DELIM"    > "$Tmp1"
           implColomatic "$Tmp1"      "split_3"    "$DELIM"
           rm -f "split_0" "split_1" "split_2" "split_3" "split_4" "split_5" >/dev/null 2>&1
           exit 0
           ;;
        4) DELIM=" "
           rm -f "split_0" "split_1" "split_2" "split_3" "split_4" "split_5" >/dev/null 2>&1
           cp "$OPTARG" "split_0"
           sort_file "split_0" "$SORT"
           split_file_n "split_0" "4" "split_"
           truncate_file_lines "split_1" $W 
               padout_file_lines "split_1"
                   string_before_file_lines "split_1" "$BAR"
           truncate_file_lines "split_2" $W 
               padout_file_lines "split_2"
                   string_before_file_lines "split_2" "$BAR"
           truncate_file_lines "split_3" $W 
               padout_file_lines "split_3"
                   string_before_file_lines "split_3" "$BAR"
           truncate_file_lines "split_4" $W 
               padout_file_lines "split_4"
                   string_before_file_lines "split_4" "$BAR"
                   string_after_file_lines  "split_4" "$BAR"
           implColomatic "split_1"    "split_2"    "$DELIM"    > "$Tmp1"
           implColomatic "$Tmp1"      "split_3"    "$DELIM"    > "$Tmp2"
           implColomatic "$Tmp2"      "split_4"    "$DELIM"
           rm -f "split_0" "split_1" "split_2" "split_3" "split_4" "split_5" >/dev/null 2>&1
           exit 0
           ;;
        5) DELIM=" "
           rm -f "split_0" "split_1" "split_2" "split_3" "split_4" "split_5" >/dev/null 2>&1
           cp "$OPTARG" "split_0"
           sort_file "split_0" "$SORT"
           split_file_n "split_0" "5" "split_"
           truncate_file_lines "split_1" $W 
               padout_file_lines "split_1"
                   string_before_file_lines "split_1" "$BAR"
           truncate_file_lines "split_2" $W 
               padout_file_lines "split_2"
                   string_before_file_lines "split_2" "$BAR"
           truncate_file_lines "split_3" $W 
               padout_file_lines "split_3"
                   string_before_file_lines "split_3" "$BAR"
           truncate_file_lines "split_4" $W 
               padout_file_lines "split_4"
                   string_before_file_lines "split_4" "$BAR"
           truncate_file_lines "split_5" $W 
               padout_file_lines "split_5"
                   string_before_file_lines "split_5" "$BAR"
                   string_after_file_lines  "split_5" "$BAR"
           implColomatic "split_1"    "split_2"    "$DELIM"    > "$Tmp1"
           implColomatic "$Tmp1"      "split_3"    "$DELIM"    > "$Tmp2"
           implColomatic "$Tmp2"      "split_4"    "$DELIM"    > "$Tmp3"
           implColomatic "$Tmp3"      "split_5"    "$DELIM"
           rm -f "split_0" "split_1" "split_2" "split_3" "split_4" "split_5" >/dev/null 2>&1
           exit 0
           ;;
        c) DELIM=","
           ;;
    esac
done
shift $(($OPTIND - 1))

if [ $# -gt 1 ]; then
    implColomatic "$1" "$2" "$DELIM" > "$Tmp2"
    shift
    shift
    for item in "$@"; do
        implColomatic "$Tmp2" "$item" "$DELIM" > "$Tmp1"
        cp "$Tmp1" "$Tmp2"
    done
    cat "$Tmp2"
fi

#######################################################################################################
Processing file: deploy
     _            _             
  __| | ___ _ __ | | ___  _   _ 
 / _` |/ _ \ '_ \| |/ _ \| | | |
| (_| |  __/ |_) | | (_) | |_| |
 \__,_|\___| .__/|_|\___/ \__, |
           |_|            |___/ 

cp ./.bashrc              ~
cp ./bashrc.shared        ~
cp ./bash.library         ~
cp ./getme                ~

#######################################################################################################
Processing file: gDiff
       ____  _  __  __ 
  __ _|  _ \(_)/ _|/ _|
 / _` | | | | | |_| |_ 
| (_| | |_| | |  _|  _|
 \__, |____/|_|_| |_|  
 |___/                 
#!/usr/bin/bash
# *********************************************************DATEOMATIC: Wed Feb 26 00:01:17 EST 2025
# *********************************************************HASHOMATIC: 77817de3816b3a115eaec6bb1cc34eea
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap 'ex:it 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp0" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3"  >/dev/null 2>&1;

UPDATE="NO"
while getopts "ur:" arg
do
    case $arg in
        u) UPDATE="YES"
           exit 0
           ;;
        r) UA="$OPTARG"
           exit 0
           ;;
    esac
done
shift $(($OPTIND - 1))

clear
git fetch origin        > $Tmp
git diff origin/master >> $Tmp
cat $Tmp

#######################################################################################################
Processing file: gHardSync
       _   _               _ ____                   
  __ _| | | | __ _ _ __ __| / ___| _   _ _ __   ___ 
 / _` | |_| |/ _` | '__/ _` \___ \| | | | '_ \ / __|
| (_| |  _  | (_| | | | (_| |___) | |_| | | | | (__ 
 \__, |_| |_|\__,_|_|  \__,_|____/ \__, |_| |_|\___|
 |___/                             |___/            
git fetch origin
git reset --hard origin/master
git clean -fd

#######################################################################################################
Processing file: gLocal
       _                    _ 
  __ _| |    ___   ___ __ _| |
 / _` | |   / _ \ / __/ _` | |
| (_| | |__| (_) | (_| (_| | |
 \__, |_____\___/ \___\__,_|_|
 |___/                        
git add "$1"
git commit -m "Update"

#######################################################################################################
Processing file: gStatus
       ____  _        _             
  __ _/ ___|| |_ __ _| |_ _   _ ___ 
 / _` \___ \| __/ _` | __| | | / __|
| (_| |___) | || (_| | |_| |_| \__ \
 \__, |____/ \__\__,_|\__|\__,_|___/
 |___/                              
#!/usr/bin/bash
# *********************************************************DATEOMATIC: Wed Feb 26 00:01:17 EST 2025
# *********************************************************HASHOMATIC: 77817de3816b3a115eaec6bb1cc34eea
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp0" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3"  >/dev/null 2>&1;

UPDATE="NO"
while getopts "c" arg
do
    case $arg in
        c) clear
           ;;
    esac
done
shift $(($OPTIND - 1))

rm -f zed zedd qed qedd  fed fedd
echo ""           > $Tmp
echo ""          >> $Tmp

git rev-parse --show-toplevel 2> /dev/null | sed -e "s,^$HOME,~,"  >> $Tmp
git branch 2> /dev/null | sed 's/^..//'                            >> $Tmp
echo ""          >> $Tmp
echo ""          >> $Tmp
git remote -v    >> $Tmp
echo ""          >> $Tmp
echo ""          >> $Tmp
git status       >> $Tmp
echo ""          >> $Tmp
echo ""          >> $Tmp
cat $Tmp
git rev-parse --show-toplevel 2> /dev/null | sed -e "s,^$HOME,~,"  > $Tmp
git branch 2> /dev/null | sed 's/^..//'  >> $Tmp
git config --get remote.origin.url 2> /dev/null  >> $Tmp

#######################################################################################################
Processing file: gUpdate
       _   _           _       _       
  __ _| | | |_ __   __| | __ _| |_ ___ 
 / _` | | | | '_ \ / _` |/ _` | __/ _ \
| (_| | |_| | |_) | (_| | (_| | ||  __/
 \__, |\___/| .__/ \__,_|\__,_|\__\___|
 |___/      |_|                        
git add "$1"
git commit -m "Update"
git push origin master
git status

#######################################################################################################
Processing file: gUpdateFromOrigin
       _   _           _       _       _____                     ___       _ 
  __ _| | | |_ __   __| | __ _| |_ ___|  ___| __ ___  _ __ ___  / _ \ _ __(_)
 / _` | | | | '_ \ / _` |/ _` | __/ _ \ |_ | '__/ _ \| '_ ` _ \| | | | '__| |
| (_| | |_| | |_) | (_| | (_| | ||  __/  _|| | | (_) | | | | | | |_| | |  | |
 \__, |\___/| .__/ \__,_|\__,_|\__\___|_|  |_|  \___/|_| |_| |_|\___/|_|  |_|
 |___/      |_|                                                              
       _       
  __ _(_)_ __  
 / _` | | '_ \ 
| (_| | | | | |
 \__, |_|_| |_|
 |___/         
#!/usr/bin/bash
# *********************************************************DATEOMATIC: Wed Feb 26 00:01:17 EST 2025
# *********************************************************HASHOMATIC: 77817de3816b3a115eaec6bb1cc34eea
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp0" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3"  >/dev/null 2>&1;


git pull

#######################################################################################################
Processing file: gawk.library
                      _      _ _ _                          
  __ _  __ ___      _| | __ | (_) |__  _ __ __ _ _ __ _   _ 
 / _` |/ _` \ \ /\ / / |/ / | | | '_ \| '__/ _` | '__| | | |
| (_| | (_| |\ V  V /|   < _| | | |_) | | | (_| | |  | |_| |
 \__, |\__,_| \_/\_/ |_|\_(_)_|_|_.__/|_|  \__,_|_|   \__, |
 |___/                                                |___/ 
# *********************************************************DATEOMATIC: Mon Mar 24 11:21:36 EDT 2025
# *********************************************************HASHOMATIC: b2301410a287f687ccf05e3fded983df

# Trims leading and trailing whitespace from a string.
function trim(str,  trimmed) {
  sub(/^[ \t\r\n]+/, "", str);
  sub(/[ \t\r\n]+$/, "", str);
  return str;
}

# Splits a string into an array based on a delimiter, handles empty fields
function split_preserve_empty(str, arr, delim,  i, field) {
  delete arr;
  i = 1;
  while (match(str, "([^" delim "]*)" delim "?", field)) {
    arr[i++] = field[1];
    str = substr(str, RLENGTH + 1);
  }
  if (length(str) > 0) {
    arr[i] = str;
  }
  return i;
}

# Checks if a string starts with a given prefix.
function starts_with(str, prefix) {
  return substr(str, 1, length(prefix)) == prefix;
}

# Checks if a string ends with a given suffix.
function ends_with(str, suffix) {
  return substr(str, length(str) - length(suffix) + 1) == suffix;
}

# Replaces all occurrences of a substring with another string.
function replace_all(str, from, to,  result) {
  result = str;
  while (sub(from, to, result)) {}
  return result;
}

#Checks if a string contains a given substring
function contains(str, sub) {
    return index(str, sub) != 0;
}

# --- Array Manipulation ---

# Checks if an array contains a given value.
function array_contains(arr, val,  i) {
  for (i in arr) {
    if (arr[i] == val) {
      return 1;
    }
  }
  return 0;
}

# Joins array elements into a string with a delimiter.
function array_join(arr, delim,  i, result) {
  result = "";
  for (i in arr) {
    result = result (result == "" ? "" : delim) arr[i];
  }
  return result;
}

#Filters an array based on a given condition (function).
function array_filter(arr, filter_func,  i, new_arr, index) {
    delete new_arr;
    index = 1;
    for (i in arr){
        if(filter_func(arr[i])){
            new_arr[index++] = arr[i];
        }
    }
    return index -1; #Return the size of the new array.
}

#Maps an array to a new array using a function.
function array_map(arr, map_func,  i, new_arr, index){
    delete new_arr;
    index = 1;
    for(i in arr){
        new_arr[index++] = map_func(arr[i]);
    }
    return index -1;
}

# --- Data Processing ---

# Calculates the sum of values in an array.
function array_sum(arr,  i, sum) {
  sum = 0;
  for (i in arr) {
    sum += arr[i];
  }
  return sum;
}

# Calculates the average of values in an array.
function array_average(arr,  sum, count) {
  sum = array_sum(arr);
  count = length(arr);
  if (count == 0) {
    return 0;
  }
  return sum / count;
}

#Parses CSV data into a 2D array.
function parse_csv(data, arr, delimiter,  lines, i, fields, j) {
    lines = split(data, lines, "\n");
    for (i = 1; i <= lines; i++) {
        split_preserve_empty(lines[i], fields, delimiter);
        for (j = 1; j <= length(fields); j++) {
            arr[i, j] = fields[j];
        }
    }
    return lines;
}

# --- List Operations (Arrays as Lists) ---

# Append an element to the end of a list (array).
function list_append(arr, val,  len) {
  len = length(arr) + 1;
  arr[len] = val;
  return len;
}

# Prepend an element to the beginning of a list (array).
function list_prepend(arr, val,  i, temp_arr, len) {
    len = length(arr);
    for(i = len; i >= 1; i--){
        temp_arr[i+1] = arr[i];
    }
    arr[1] = val;
    for(i = 2; i <= len+1; i++){
        arr[i] = temp_arr[i];
    }
    return len +1;
}

# Insert an element at a specific index in a list (array).
function list_insert(arr, index, val,  i, temp_arr, len) {
  len = length(arr);
  if (index < 1 || index > len + 1) {
    return len; # Invalid index, return original length.
  }

  for (i = len; i >= index; i--) {
    temp_arr[i + 1] = arr[i];
  }
  arr[index] = val;
  for (i = index + 1; i <= len + 1; i++) {
    arr[i] = temp_arr[i];
  }
  return len + 1;
}

# Remove an element at a specific index in a list (array).
function list_remove_at(arr, index,  i, len) {
  len = length(arr);
  if (index < 1 || index > len) {
    return len; # Invalid index, return original length.
  }

  for (i = index; i < len; i++) {
    arr[i] = arr[i + 1];
  }
  delete arr[len];
  return len - 1;
}

# Remove the first occurrence of a value from a list (array).
function list_remove_value(arr, val,  i, len) {
  len = length(arr);
  for (i = 1; i <= len; i++) {
    if (arr[i] == val) {
      list_remove_at(arr, i);
      return len - 1;
    }
  }
  return len; # Value not found, return original length.
}

# Get the element at a specific index in a list (array).
function list_get(arr, index,  len) {
  len = length(arr);
  if (index < 1 || index > len) {
    return ""; # Invalid index, return empty string.
  }
  return arr[index];
}

# Get the index of the first occurrence of a value in a list (array).
function list_index_of(arr, val,  i, len) {
  len = length(arr);
  for (i = 1; i <= len; i++) {
    if (arr[i] == val) {
      return i;
    }
  }
  return -1; # Value not found, return -1.
}

# Get the last index of a value in a list (array).
function list_last_index_of(arr, val, i, len, last_index){
    len = length(arr);
    last_index = -1;
    for(i = 1; i <= len; i++){
        if(arr[i] == val){
            last_index = i;
        }
    }
    return last_index;
}

# Reverse a list (array).
function list_reverse(arr,  i, len, temp_arr) {
  len = length(arr);
  for (i = 1; i <= len; i++) {
    temp_arr[i] = arr[i];
  }
  for (i = 1; i <= len; i++) {
    arr[i] = temp_arr[len - i + 1];
  }
  return len;
}

# Slice a list (array) from start_index to end_index (inclusive).
function list_slice(arr, start_index, end_index,  i, len, new_arr, new_index) {
  len = length(arr);
  if (start_index < 1) {
    start_index = 1;
  }
  if (end_index > len) {
    end_index = len;
  }
  if (start_index > end_index) {
    return 0; # Empty slice, return 0.
  }

  delete new_arr;
  new_index = 1;
  for (i = start_index; i <= end_index; i++) {
    new_arr[new_index++] = arr[i];
  }
  return new_index - 1;
}

# Concatenate two lists (arrays).
function list_concat(arr1, arr2,  i, len1, len2, new_arr, new_index) {
  len1 = length(arr1);
  len2 = length(arr2);
  delete new_arr;
  new_index = 1;
  for (i = 1; i <= len1; i++) {
    new_arr[new_index++] = arr1[i];
  }
  for (i = 1; i <= len2; i++) {
    new_arr[new_index++] = arr2[i];
  }
  return new_index - 1;
}

# --- Example Usage (Illustrative) ---
BEGIN {
  # String manipulation examples
  str = "   hello world   ";
  print "[" trim(str) "]";

  text = "apple,banana,,orange";
  count = split_preserve_empty(text, fruits, ",");
  for (i = 1; i <= count; i++) {
    print "Fruit " i ": [" fruits[i] "]";
  }

  print starts_with("awk is fun", "awk");
  print ends_with("awk is fun", "fun");
  print replace_all("awk is fun", "fun", "powerful");
  print contains("awk is fun", "is");

  # Array manipulation examples
  numbers[1] = 10; numbers[2] = 20; numbers[3] = 30;
  print array_contains(numbers, 20);
  print array_join(numbers, ", ");
  print array_sum(numbers);
  print array_average(numbers);

  # CSV parsing example
  csv_data = "name,age,city\nJohn,30,New York\nJane,25,London";
  rows = parse_csv(csv_data, csv_array, ",");
  for (i = 1; i <= rows; i++) {
    print csv_array[i, 1] ", " csv_array[i, 2] ", " csv_array[i, 3];
  }

  # Array filter and map examples
  function is_even(num){return num % 2 == 0;}
  even_count = array_filter(numbers, "is_even", even_numbers);
  print "Even numbers: " array_join(even_numbers, ", ");

  function double(num){return num * 2;}
  doubled_count = array_map(numbers, "double", doubled_numbers);
  print "Doubled numbers: " array_join(doubled_numbers, ", ");

  # List operation examples
  list[1] = 10; list[2] = 20; list[3] = 30;

  list_append(list, 40);
  list_prepend(list, 5);
  list_insert(list, 3, 25);
  list_remove_at(list, 4);
  list_remove_value(list, 20);

  print "List: " array_join(list, ", ");
  print "Get index 2: " list_get(list, 2);
  print "Index of 30: " list_index_of(list, 30);
  print "Last Index of 10: " list_last_index_of(list,10);
  list_reverse(list);
  print "Reversed list: " array_join(list, ", ");

  list2[1] = 100; list2[2] = 200;
  list_concat(list, list2, combined_list);
  print "Combined List: " array_join(combined_list, ", ");

  list_slice(combined_list, 2, 4, sliced_list);
  print "Sliced List: " array_join(sliced_list, ", ");
}

#######################################################################################################
Processing file: get.raw
            _                        
  __ _  ___| |_   _ __ __ ___      __
 / _` |/ _ \ __| | '__/ _` \ \ /\ / /
| (_| |  __/ |_ _| | | (_| |\ V  V / 
 \__, |\___|\__(_)_|  \__,_| \_/\_/  
 |___/                               
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.bashrc
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.gitignore
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.vimrc
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/README.md
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.functions
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.justhelp
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.library
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashrc.shared
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashtop
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/colomatic
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/deploy
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gDiff
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gHardSync
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gLocal
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gStatus
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdate
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdateFromOrigin
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gawk.library
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/get.raw
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/getme
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/indentomatic
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/justomatic
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/listing
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/make
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/newbashscript
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/notes
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/other
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/padomatic
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/rmLeadingWhiteSpace
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/setgit
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/template.html
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/update
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/vim.txt

#######################################################################################################
Processing file: getme
            _                  
  __ _  ___| |_ _ __ ___   ___ 
 / _` |/ _ \ __| '_ ` _ \ / _ \
| (_| |  __/ |_| | | | | |  __/
 \__, |\___|\__|_| |_| |_|\___|
 |___/                         
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.bashrc
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.functions
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.justhelp
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.library
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashrc.shared
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashtop
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/newbashscript

#######################################################################################################
Processing file: indentomatic
 _           _            _                        _   _      
(_)_ __   __| | ___ _ __ | |_ ___  _ __ ___   __ _| |_(_) ___ 
| | '_ \ / _` |/ _ \ '_ \| __/ _ \| '_ ` _ \ / _` | __| |/ __|
| | | | | (_| |  __/ | | | || (_) | | | | | | (_| | |_| | (__ 
|_|_| |_|\__,_|\___|_| |_|\__\___/|_| |_| |_|\__,_|\__|_|\___|
                                                              
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp1=/tmp/$$_$$
Tmp2=/tmp/$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp"  >/dev/null 2>&1
rm -f "$Tmp1"  >/dev/null 2>&1
rm -f "$Tmp2"  >/dev/null 2>&1
rm -f "$Tmp3"  >/dev/null 2>&1
#================================================================

source ~/bash.library

filename="$1"

# Check if a filename is are provided
if [ -z "$filename" ]; then
  fecho "Usage: <filename> <filename>"
  exit 1
fi

# Check if the files exist
if [ ! -f "$filename" ]; then
  fecho "Error: File '$filename' not found."
  exit 1
fi

indent_file "$filename" 


#######################################################################################################
Processing file: input.txt
 _                   _    _        _   
(_)_ __  _ __  _   _| |_ | |___  _| |_ 
| | '_ \| '_ \| | | | __|| __\ \/ / __|
| | | | | |_) | |_| | |_ | |_ >  <| |_ 
|_|_| |_| .__/ \__,_|\__(_)__/_/\_\\__|
        |_|                            
Global

:h[elp] keyword - open help for keyword
:sav[eas] file - save file as
:clo[se] - close current pane
:ter[minal] - open a terminal window
K - open man page for word under the cursor
Tip Run vimtutor in a terminal to learn the first Vim commands.

Cursor movement

h - move cursor left
j - move cursor down
k - move cursor up
l - move cursor right
gj - move cursor down (multi-line text)
gk - move cursor up (multi-line text)
H - move to top of screen
M - move to middle of screen
L - move to bottom of screen
w - jump forwards to the start of a word
W - jump forwards to the start of a word (words can contain punctuation)
e - jump forwards to the end of a word
E - jump forwards to the end of a word (words can contain punctuation)
b - jump backwards to the start of a word
B - jump backwards to the start of a word (words can contain punctuation)
ge - jump backwards to the end of a word
gE - jump backwards to the end of a word (words can contain punctuation)
% - move cursor to matching character (default supported pairs: '()', '{}', '[]' 
- use :h matchpairs in vim for more info)
0 - jump to the start of the line
^ - jump to the first non-blank character of the line
$ - jump to the end of the line
g_ - jump to the last non-blank character of the line
gg - go to the first line of the document
G - go to the last line of the document
5gg or 5G - go to line 5
gd - move to local declaration
gD - move to global declaration
fx - jump to next occurrence of character x
tx - jump to before next occurrence of character x
Fx - jump to the previous occurrence of character x
Tx - jump to after previous occurrence of character x
; - repeat previous f, t, F or T movement
, - repeat previous f, t, F or T movement, backwards
} - jump to next paragraph (or function/block, when editing code)
{ - jump to previous paragraph (or function/block, when editing code)
zz - center cursor on screen
zt - position cursor on top of the screen
zb - position cursor on bottom of the screen
Ctrl + e - move screen down one line (without moving cursor)
Ctrl + y - move screen up one line (without moving cursor)
Ctrl + b - move screen up one page (cursor to last line)
Ctrl + f - move screen down one page (cursor to first line)
Ctrl + d - move cursor and screen down 1/2 page
Ctrl + u - move cursor and screen up 1/2 page

Insert mode - inserting/appending text

i - insert before the cursor
I - insert at the beginning of the line
a - insert (append) after the cursor
A - insert (append) at the end of the line
o - append (open) a new line below the current line
O - append (open) a new line above the current line
ea - insert (append) at the end of the word
Ctrl + h - delete the character before the cursor during insert mode
Ctrl + w - delete word before the cursor during insert mode
Ctrl + j - add a line break at the cursor position during insert mode
Ctrl + t - indent (move right) line one shiftwidth during insert mode
Ctrl + d - de-indent (move left) line one shiftwidth during insert mode
Ctrl + n - insert (auto-complete) next match before the cursor during insert mode
Ctrl + p - insert (auto-complete) previous match before the cursor during insert mode
Ctrl + rx - insert the contents of register x
Ctrl + ox - Temporarily enter normal mode to issue one normal-mode command x.
Esc or Ctrl + c - exit insert mode

Editing

r - replace a single character.
R - replace more than one character, until ESC is pressed.
J - join line below to the current one with one space in between
gJ - join line below to the current one without space in between
gwip - reflow paragraph
g~ - switch case up to motion
gu - change to lowercase up to motion
gU - change to uppercase up to motion
cc - change (replace) entire line
c$ or C - change (replace) to the end of the line
ciw - change (replace) entire word
cw or ce - change (replace) to the end of the word
s - delete character and substitute text (same as cl)
S - delete line and substitute text (same as cc)
xp - transpose two letters (delete and paste)
u - undo
U - restore (undo) last changed line
Ctrl + r - redo
. - repeat last command

Marking text (visual mode)

v - start visual mode, mark lines, then do a command (like y-yank)
V - start linewise visual mode
o - move to other end of marked area
Ctrl + v - start visual block mode
O - move to other corner of block
aw - mark a word
ab - a block with ()
aB - a block with {}
at - a block with <> tags
ib - inner block with ()
iB - inner block with {}
it - inner block with <> tags
Esc or Ctrl + c - exit visual mode

Visual commands

> - shift text right
< - shift text left
y - yank (copy) marked text
d - delete marked text
~ - switch case
u - change marked text to lowercase
U - change marked text to uppercase

Registers

:reg[isters] - show registers content
"xy - yank into register x
"xp - paste contents of register x
"+y - yank into the system clipboard register
"+p - paste from the system clipboard register
Tip Registers are being stored in ~/.viminfo, and will be loaded again on next restart of vim.

Special registers:

0 - last yank
" - unnamed register, last delete or yank
% - current file name
# - alternate file name
* - clipboard contents (X11 primary)
+ - clipboard contents (X11 clipboard)
/ - last search pattern
: - last command-line
. - last inserted text
- - last small (less than a line) delete
= - expression register
_ - black hole register

Marks and positions

:marks - list of marks
ma - set current position for mark A
`a - jump to position of mark A
y`a - yank text to position of mark A
`0 - go to the position where Vim was previously exited
`" - go to the position when last editing this file
`. - go to the position of the last change in this file
`` - go to the position before the last jump
:ju[mps] - list of jumps
Ctrl + i - go to newer position in jump list
Ctrl + o - go to older position in jump list
:changes - list of changes
g, - go to newer position in change list
g; - go to older position in change list
Ctrl + ] - jump to the tag under cursor
Tip To jump to a mark you can either use a backtick (`) or an apostrophe (').
Using an apostrophe jumps to the beginning (first non-blank) of the line holding the mark.

Macros

qa - record macro a
q - stop recording macro
@a - run macro a
@@ - rerun last run macro

Cut and paste

yy - yank (copy) a line
2yy - yank (copy) 2 lines
yw - yank (copy) the characters of the word from the cursor position to the start of the next word
yiw - yank (copy) word under the cursor
yaw - yank (copy) word under the cursor and the space after or before it
y$ or Y - yank (copy) to end of line
p - put (paste) the clipboard after cursor
P - put (paste) before cursor
gp - put (paste) the clipboard after cursor and leave cursor after the new text
gP - put (paste) before cursor and leave cursor after the new text
dd - delete (cut) a line
2dd - delete (cut) 2 lines
dw - delete (cut) the characters of the word from the cursor position to the start of the next word
diw - delete (cut) word under the cursor
daw - delete (cut) word under the cursor and the space after or before it
:3,5d - delete lines starting from 3 to 5
Tip You can also use the following characters to specify the range:
e.g.
:.,$d - From the current line to the end of the file
:.,1d - From the current line to the beginning of the file
:10,1d - From the 10th line to the beginning of the file
:g/{pattern}/d - delete all lines containing pattern
:g!/{pattern}/d - delete all lines not containing pattern
d$ or D - delete (cut) to the end of the line
x - delete (cut) character

Indent text

>> - indent (move right) line one shiftwidth
<< - de-indent (move left) line one shiftwidth
>% - indent a block with () or {} (cursor on brace)
<% - de-indent a block with () or {} (cursor on brace)
>ib - indent inner block with ()
>at - indent a block with <> tags
3== - re-indent 3 lines
=% - re-indent a block with () or {} (cursor on brace)
=iB - re-indent inner block with {}
gg=G - re-indent entire buffer
]p - paste and adjust indent to current line

Exiting

:w - write (save) the file, but don't exit
:w !sudo tee % - write out the current file using sudo
:wq or :x or ZZ - write (save) and quit
:q - quit (fails if there are unsaved changes)
:q! or ZQ - quit and throw away unsaved changes
:wqa - write (save) and quit on all tabs

Search and replace

/pattern - search for pattern
?pattern - search backward for pattern
\vpattern - 'very magic' pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)
n - repeat search in same direction
N - repeat search in opposite direction
:%s/old/new/g - replace all old with new throughout file
:%s/old/new/gc - replace all old with new throughout file with confirmations
:noh[lsearch] - remove highlighting of search matches

Search in multiple files

:vim[grep] /pattern/ {`{file}`} - search for pattern in multiple files
e.g. :vim[grep] /foo/ **/*
:cn[ext] - jump to the next match
:cp[revious] - jump to the previous match
:cope[n] - open a window containing the list of matches
:ccl[ose] - close the quickfix window

Tabs

:tabnew or :tabnew {page.words.file} - open a file in a new tab
Ctrl + wT - move the current split window into its own tab
gt or :tabn[ext] - move to the next tab
gT or :tabp[revious] - move to the previous tab
#gt - move to tab number #
:tabm[ove] # - move current tab to the #th position (indexed from 0)
:tabc[lose] - close the current tab and all its windows
:tabo[nly] - close all tabs except for the current one
:tabdo command - run the command on all tabs (e.g. :tabdo q - closes all opened tabs)

Working with multiple files

:e[dit] file - edit a file in a new buffer
:bn[ext] - go to the next buffer
:bp[revious] - go to the previous buffer
:bd[elete] - delete a buffer (close a file)
:b[uffer]# - go to a buffer by index #
:b[uffer] file - go to a buffer by file
:ls or :buffers - list all open buffers
:sp[lit] file - open a file in a new buffer and split window
:vs[plit] file - open a file in a new buffer and vertically split window
:vert[ical] ba[ll] - edit all buffers as vertical windows
:tab ba[ll] - edit all buffers as tabs
Ctrl + ws - split window
Ctrl + wv - split window vertically
Ctrl + ww - switch windows
Ctrl + wq - quit a window
Ctrl + wx - exchange current window with next one
Ctrl + w= - make all windows equal height & width
Ctrl + wh - move cursor to the left window (vertical split)
Ctrl + wl - move cursor to the right window (vertical split)
Ctrl + wj - move cursor to the window below (horizontal split)
Ctrl + wk - move cursor to the window above (horizontal split)
Ctrl + wH - make current window full height at far left (leftmost vertical window)
Ctrl + wL - make current window full height at far right (rightmost vertical window)
Ctrl + wJ - make current window full width at the very bottom (bottommost horizontal window)
Ctrl + wK - make current window full width at the very top (topmost horizontal window)

Diff

zf - manually define a fold up to motion
zd - delete fold under the cursor
za - toggle fold under the cursor
zo - open fold under the cursor
zc - close fold under the cursor
zr - reduce (open) all folds by one level
zm - fold more (close) all folds by one level
zi - toggle folding functionality
]c - jump to start of next change
[c - jump to start of previous change
do or :diffg[et] - obtain (get) difference (from other buffer)
dp or :diffpu[t] - put difference (to other buffer)
:diffthis - make current window part of diff
:dif[fupdate] - update differences
:diffo[ff] - switch off diff mode for current window

#######################################################################################################
Processing file: justomatic
   _           _                        _   _      
  (_)_   _ ___| |_ ___  _ __ ___   __ _| |_(_) ___ 
  | | | | / __| __/ _ \| '_ ` _ \ / _` | __| |/ __|
  | | |_| \__ \ || (_) | | | | | | (_| | |_| | (__ 
 _/ |\__,_|___/\__\___/|_| |_| |_|\__,_|\__|_|\___|
|__/                                               
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp1=/tmp/$$_$$
Tmp2=/tmp/$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp"  >/dev/null 2>&1
rm -f "$Tmp1"  >/dev/null 2>&1
rm -f "$Tmp2"  >/dev/null 2>&1
rm -f "$Tmp3"  >/dev/null 2>&1
#================================================================

source ~/bash.library

INDENT=""
DELIM=" "
BAR=""
SPACE=""
W=32

while getopts "isn:f:c" arg
do
    case $arg in
        i) INDENT="YES"
           echo "$INDENT"
           ;;
        s) SPACE="    "
           ;;
        n) W=$OPTARG
           ;;
        f) DELIM=""
           justify_file "$OPTARG" "$W"
           exit 0
           ;;
        c) DELIM=","
           ;;
    esac
done
shift $(($OPTIND - 1))
echo "$INDENT"

if [ "$INDENT" == "YES" ]; then    
    indent_file "$OPTARG"
fi



#######################################################################################################
Processing file: listing
 _ _     _   _             
| (_)___| |_(_)_ __   __ _ 
| | / __| __| | '_ \ / _` |
| | \__ \ |_| | | | | (_| |
|_|_|___/\__|_|_| |_|\__, |
                     |___/ 
#!/usr/bin/bash
# *********************************************************DATEOMATIC: Wed Feb 26 00:01:17 EST 2025
# *********************************************************HASHOMATIC: 77817de3816b3a115eaec6bb1cc34eea
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp0" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3"  >/dev/null 2>&1;

UPDATE="NO"
while getopts "cur:" arg
do
    case $arg in
        c) clear
           ;;
        u) UPDATE="YES"
           exit 0
           ;;
        r) OA="$OPTARG"
           exit 0
           ;;
    esac
done
shift $(($OPTIND - 1))

echo "\`\`\`"
for file in `ls -A | grep -v README.md | grep -v .git | sort | uniq`; do
        # Operations on each file, for example:
        echo ""
        echo "#######################################################################################################"
        echo "Processing file: $file"
        figlet "$file"
        cat "$file"
done
echo "\`\`\`"


#######################################################################################################
Processing file: local.html
 _                 _   _     _             _ 
| | ___   ___ __ _| | | |__ | |_ _ __ ___ | |
| |/ _ \ / __/ _` | | | '_ \| __| '_ ` _ \| |
| | (_) | (_| (_| | |_| | | | |_| | | | | | |
|_|\___/ \___\__,_|_(_)_| |_|\__|_| |_| |_|_|
                                             
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="date" content=''>
    <title></title>
  </head>
  <body>
    <p>Date: </p>
<table>
<thead>
<tr class="header">
<th>————————</th>
<th>————————</th>
<th>————————</th>
<th>————————</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.bashrc">.bashrc</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.gitignore">.gitignore</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.vimrc">.vimrc</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/README.md">README.md</a></td>
</tr>
<tr class="even">
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.functions">bash.functions</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.justhelp">bash.justhelp</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.library">bash.library</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashrc.shared">bashrc.shared</a></td>
</tr>
<tr class="odd">
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashtop">bashtop</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/colomatic">colomatic</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/deploy">deploy</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gDiff">gDiff</a></td>
</tr>
<tr class="even">
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gHardSync">gHardSync</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gLocal">gLocal</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gStatus">gStatus</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdate">gUpdate</a></td>
</tr>
<tr class="odd">
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdateFromOrigin">gUpdateFromOrigin</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gawk.library">gawk.library</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/get.raw">get.raw</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/getme">getme</a></td>
</tr>
<tr class="even">
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/indentomatic">indentomatic</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/justomatic">justomatic</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/listing">listing</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/make">make</a></td>
</tr>
<tr class="odd">
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/newbashscript">newbashscript</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/notes">notes</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/other">other</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/padomatic">padomatic</a></td>
</tr>
<tr class="even">
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/rmLeadingWhiteSpace">rmLeadingWhiteSpace</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/setgit">setgit</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/template.html">template.html</a></td>
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/update">update</a></td>
</tr>
<tr class="odd">
<td><a href="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/vim.txt">vim.txt</a></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr class="header">
<th>————————</th>
<th>————————</th>
<th>————————</th>
<th>————————</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>colomatic</td>
<td>indentomatic</td>
<td>justomatic</td>
<td>padomatic</td>
</tr>
</tbody>
</table>
<h2 id="bash.library-includes">bash.library includes</h2>
<table>
<thead>
<tr class="header">
<th>————————</th>
<th>————————</th>
<th>————————</th>
<th>————————</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>abspath()</td>
<td>array_contains()</td>
<td>array_join()</td>
<td>backup_file()</td>
</tr>
<tr class="even">
<td>basename()</td>
<td>collapse_hostname()</td>
<td>collapse_pwd()</td>
<td>command_exists()</td>
</tr>
<tr class="odd">
<td>contains()</td>
<td>cp_r()</td>
<td>create_markdown_table4()</td>
<td>dirname()</td>
</tr>
<tr class="even">
<td>ends_with()</td>
<td>eprint()</td>
<td>exists()</td>
<td>extension()</td>
</tr>
<tr class="odd">
<td>fdebug()</td>
<td>fecho()</td>
<td>git_branch()</td>
<td>git_origin()</td>
</tr>
<tr class="even">
<td>git_originsync()</td>
<td>git_toplevel()</td>
<td>indent_file()</td>
<td>isSameHash()</td>
</tr>
<tr class="odd">
<td>is_dir()</td>
<td>is_file()</td>
<td>is_reachable()</td>
<td>justify_file()</td>
</tr>
<tr class="even">
<td>justify_line()</td>
<td>kill_name()</td>
<td>kill_pid()</td>
<td>longest_string_length()</td>
</tr>
<tr class="odd">
<td>mkdir_p()</td>
<td>mv_f()</td>
<td>padout_file_lines()</td>
<td>pidof_name()</td>
</tr>
<tr class="even">
<td>read_prompt()</td>
<td>repeat_char()</td>
<td>replace()</td>
<td>rm_rf()</td>
</tr>
<tr class="odd">
<td>run_and_error()</td>
<td>run_and_exit_code()</td>
<td>run_and_output()</td>
<td>scan_for_secrets()</td>
</tr>
<tr class="even">
<td>sort_file()</td>
<td>split_file_n()</td>
<td>starts_with()</td>
<td>string_after_file_lines()</td>
</tr>
<tr class="odd">
<td>string_before_file_lines()</td>
<td>substring()</td>
<td>timestamp_ms()</td>
<td>trim()</td>
</tr>
<tr class="even">
<td>trim_leading_whitespace_file()</td>
<td>truncate_file_lines()</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<pre><code>
#######################################################################################################
Processing file: .bashrc
   _               _              
  | |__   __ _ ___| |__  _ __ ___ 
  | &#39;_ \ / _` / __| &#39;_ \| &#39;__/ __|
 _| |_) | (_| \__ \ | | | | | (__ 
(_)_.__/ \__,_|___/_| |_|_|  \___|
                                  
# *********************************************************DATEOMATIC: Mon Mar 24 11:16:15 EDT 2025
# *********************************************************HASHOMATIC: e5bceedce2750c47d9d26c395afd43b0
# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don&#39;t do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don&#39;t put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don&#39;t overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern &quot;**&quot; used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] &amp;&amp; eval &quot;$(SHELL=/bin/sh lesspipe)&quot;

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z &quot;${debian_chroot:-}&quot; ] &amp;&amp; [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# disable color support of ls and grep
alias ls=&#39;ls --color=never&#39;
alias grep=&#39;grep --color=never&#39;
alias fgrep=&#39;fgrep --color=never&#39;
alias egrep=&#39;egrep --color=never&#39;

# some more ls aliases
alias ll=&#39;ls -alF&#39;
alias la=&#39;ls -A&#39;
alias l=&#39;ls -CF&#39;

# Add an &quot;alert&quot; alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert=&#39;notify-send --urgency=low -i &quot;$([ $? = 0 ] &amp;&amp; echo terminal || echo error)&quot; &quot;$(history|tail -n1|sed -e &#39;\&#39;&#39;s/^\s*[0-9]\+\s*//;s/[;&amp;|]\s*alert$//&#39;\&#39;&#39;)&quot;&#39;

# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don&#39;t need to enable
# this, if it&#39;s already enabled in /etc/bash.bashrc and /etc/profile
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

#######################################################################################################
Processing file: .vim.vimsession
       _                 _                             _             
__   _(_)_ __ ___ __   _(_)_ __ ___  ___  ___  ___ ___(_) ___  _ __  
\ \ / / | &#39;_ ` _ \\ \ / / | &#39;_ ` _ \/ __|/ _ \/ __/ __| |/ _ \| &#39;_ \ 
 \ V /| | | | | | |\ V /| | | | | | \__ \  __/\__ \__ \ | (_) | | | |
(_)_/ |_|_| |_| |_(_)_/ |_|_| |_| |_|___/\___||___/___/_|\___/|_| |_|
                                                                     
/home/mestes/scm/basics/colomatic
/home/mestes/scm/basics/bash.library

#######################################################################################################
Processing file: .vim.vimwindow
       _                 _                   _           _               
__   _(_)_ __ ___ __   _(_)_ __ _____      _(_)_ __   __| | _____      __
\ \ / / | &#39;_ ` _ \\ \ / / | &#39;_ ` _ \ \ /\ / / | &#39;_ \ / _` |/ _ \ \ /\ / /
 \ V /| | | | | | |\ V /| | | | | | \ V  V /| | | | | (_| | (_) \ V  V / 
(_)_/ |_|_| |_| |_(_)_/ |_|_| |_| |_|\_/\_/ |_|_| |_|\__,_|\___/ \_/\_/  
                                                                         
/home/mestes/scm/basics/bash.library

#######################################################################################################
Processing file: .vimrc
       _                    
__   _(_)_ __ ___  _ __ ___ 
\ \ / / | &#39;_ ` _ \| &#39;__/ __|
 \ V /| | | | | | | | | (__ 
(_)_/ |_|_| |_| |_|_|  \___|
                            
&quot; *********************************************************DATEOMATIC: Mon Mar 24 11:16:15 EDT 2025
&quot; *********************************************************HASHOMATIC: 2dfc1b0e6845bc5a5eb3fa9c7a96de5a
&quot; *****************************************************************************************************
                &quot; W e l c o m e   t o   m y  V I M R C
                &quot; *************************************************************************************
set nocompatible
set hidden                        &quot; Will switch to next buffer without raising an error
set nowrap
set nohlsearch
set noerrorbells
set scrolloff=8
let loaded_matchparen = 1         
            &quot; http://vimrc-dissection.blogspot.com/2006/09/vim-7-re-turn-off-parenparenthesiswhat.html
set splitbelow
set splitright
set cmdheight=2                   &quot; Set the command window height to 2 lines, to avoid many cases
                                  &quot; of having to  press &lt;Enter&gt; to continue
set ruler                         &quot; Display crsr pos on last line of scr or in status line of a window
set number                        &quot; Display line numbers on the left
set wildmenu                      &quot; Better command-line completion
set showcmd                       &quot; Show partial commands in the last line of the screen
set ignorecase                    &quot; Use case insensitive search, except when using capital letters
set smartcase
set backspace=indent,eol,start    &quot; Allow bckspcing over autoindent, line brks &amp; start of insrt action
set nostartofline                 &quot; Stop certain movements from always going to the 1st char of a line.
set laststatus=2                  &quot; Always display the status line, even if only 1 window is displayed
set noswapfile
set nobackup
set undodir=~/.vim/undodir
set undofile
set colorcolumn=104
set background=dark
set laststatus=2                  &quot; For Status Line
set t_Co=256                      &quot; For Status Line

&quot; set relativenumber
&quot; set signcolumn=yes
&quot; set incsearch
&quot; set hlsearch incsearch          &quot; Highlight searches (use &lt;C-L&gt; to temporarily turn off highlighting
                                  &quot; see the mapping of &lt;C-L&gt; below)

&quot; *****************************************************************************************************
                &quot; Indent and Tab  Setup
                &quot; *************************************************************************************
&quot; There are in fact four main methods available for indentation, each one
&quot; overrides the previous if it is enabled, or non-empty for &#39;indentexpr&#39;:
&quot; &#39;autoindent&#39;  uses the indent from the previous line.
&quot;               When opening a new line and no filetype-specific indenting is enabled, keep same
&quot;               indent as line currently on.
&quot; &#39;smartindent&#39; is like &#39;autoindent&#39; but also recognizes some C syntax to
&quot;       increase/reduce the indent where appropriate.
&quot; &#39;cindent&#39; Works more cleverly than the other two and is configurable to
&quot;       different indenting styles.
&quot; &#39;indentexpr&#39;  The most flexible of all: Evaluates an expression to compute
&quot;       the indent of a line.  When non-empty this method overrides
&quot;       the other ones.  See |indent-expression|.
&quot; set cindent                       
set tabstop=4 softtabstop=4
set shiftwidth=4     &quot; Indent settings for using 4 spaces instead of tabs.
                     &quot; Do not change &#39;tabstop&#39; from its default value of 8 
set expandtab
set smartindent
&quot; *****************************************************************************************************
                &quot; Syntax Highlighting
                &quot; *************************************************************************************
syntax off

set confirm                       &quot; Instead of failing a command because of unsaved changes,
                                  &quot; raise a dialogue asking to save changed files.
set visualbell                    &quot; Use visual bell instead of beeping when doing something wrong
set t_vb=
                                  &quot; reset terminal code for visual bell. 
                                  &quot; If visualbell is set, and this line is also included vim will
                                  &quot; neither flash nor beep. If visualbell is unset, this does nothing.
let mapleader = &quot; &quot;               &quot; Leader - ( Spacebar )
let MRU_Auto_Close = 1            &quot; Set MRU window to close after selection
set notimeout ttimeout ttimeoutlen=200  &quot; Quickly time out on keycodes, but never time out on mappings

&quot; *****************************************************************************************************
                &quot; Commands
                &quot; *************************************************************************************
command! -nargs=+ GREP call GrepBuffers(&lt;q-args&gt;)
command! SESSION      :call CaptureSession() 
command! MyLinter :caddexpr system(&quot;cat zzzz&quot;) | copen
command! ZZZZ :caddexpr system(&quot;cat zzzz&quot;) | copen
map &lt;C-j&gt; :cn&lt;CR&gt;
map &lt;C-k&gt; :cp&lt;CR&gt;
map &lt;C-@&gt; @a

&quot;  :copen &quot; Open the quickfix window
&quot;  :ccl   &quot; Close it
&quot;  :cw    &quot; Open it if there are &quot;errors&quot;, close it otherwise (some people prefer this)
&quot;  :cn    &quot; Go to the next error in the window
&quot;  :cp    &quot; Go to the previous error in the window
&quot;  :cnf   &quot; Go to the first error in the next file
&quot;  :.cc   &quot; Go to error under cursor (if cursor is in quickfix window)
&quot;
&quot; *****************************************************************************************************
                &quot; Pre Vundle Setup
                &quot; *************************************************************************************
filetype off

&quot; let NOVUNDLE = 1
&quot; *****************************************************************************************************
                &quot; Vundle            - see :h vundle for more details or wiki for FAQ
                &quot; *******************************************************************
                &quot; git clone  https://github.com/VundleVim/Vundle.vim.git  ~/.vim/bundle/Vundle.vim
                &quot; git clone  https://github.com/archernar/home.git .
                &quot; git clone  https://github.com/archernar/dotfiles.git    ~/tmp
                &quot; git clone
                &quot; OLD TO BE REMOVED git clone  https://github.com/archernar/Snips.git .
                &quot; :PluginList       - lists configured plugins
                &quot; :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
                &quot; :PluginUpdate     - &lt;leader&gt;p
                &quot; :PluginSearch foo - searches for foo; append `!` to refresh local cache
                &quot; :PluginClean      - confirms removal of unused plugins;
                &quot;                     append `!` to auto-approve removal
                &quot; *************************************************************************************
                
&quot; *****************************************************************************************************
                &quot; Vundle Begin
                &quot; *************************************************************************************
if !exists(&quot;NOVUNDLE&quot;)
    set rtp+=~/.vim/bundle/Vundle.vim
    call vundle#begin()
    &quot; Plugin &#39;VundleVim/Vundle.vim&#39;
    Plugin &#39;archernar/vim-flashcard&#39;
    Plugin &#39;archernar/vim-dir&#39;
    Plugin &#39;archernar/vim-progsnips&#39;
    Plugin &#39;archernar/vim-map&#39;
    Plugin &#39;archernar/vim-utils&#39;
    Plugin &#39;archernar/vim-session&#39;
    Plugin &#39;archernar/vim-program&#39;
    Plugin &#39;archernar/vim-monochrome&#39;
    Plugin &#39;archernar/vim-mru&#39;
    Plugin &#39;vim-scripts/grep.vim&#39;      &quot; https://github.com/vim-scripts/grep.vim
    Plugin &#39;gruvbox-community/gruvbox&#39;
    Bundle &#39;Lokaltog/vim-monotone.git&#39;
    Bundle &#39;owickstrom/vim-colors-paramount&#39;
    Plugin &#39;tpope/vim-surround&#39;
    Plugin &#39;vim-airline/vim-airline&#39;
    &quot; Plugin &#39;tpope/vim-fugitive&#39;
    &quot; Plugin &#39;vim-airline/vim-airline-themes&#39;
    &quot; Plugin &#39;jeetsukumaran/vim-buffergator&#39;
    &quot; Plugin &#39;ctrlpvim/ctrlp.vim&#39;
    &quot;
    call vundle#end()
endif
&quot; *****************************************************************************************************
                &quot; Vundle End
                &quot; *************************************************************************************
                                  
&quot; *****************************************************************************************************
                &quot; Post Vundle Setup
                &quot; *************************************************************************************
filetype plugin indent on         &quot; required, to ignore plugin indent changes, instead use: 
                                  &quot; filetype plugin on
                                  &quot; Put non-Plugin stuff after this line



&quot; *****************************************************************************************************
                &quot; Functions
                &quot; *************************************************************************************
function g:LogMessage(...)
    let l:ret = 0

    let l:messages=[]
    call add(l:messages, a:1)
    call writefile(l:messages, &quot;/tmp/vimscript.log&quot;, &quot;a&quot;)
    return l:ret
endfunction

&quot; *****************************************************************************************************
                &quot; Remaps
                &quot; *************************************************************************************
nnoremap         &lt;F1&gt;      :cclose&lt;cr&gt;:bnext&lt;cr&gt;
nnoremap &lt;leader&gt;&lt;F1&gt;      :cclose&lt;cr&gt;
inoremap         &lt;F5&gt; &lt;esc&gt;:call ProgramCompile()&lt;cr&gt;
nnoremap         &lt;F5&gt;      :call ProgramCompile()&lt;cr&gt;
nnoremap &lt;leader&gt;&lt;F6&gt;      :cclose&lt;cr&gt;
inoremap         &lt;F6&gt; &lt;esc&gt;:call ProgramRun()&lt;cr&gt;
nnoremap         &lt;F6&gt;      :call ProgramRun()&lt;cr&gt;
nnoremap &lt;Leader&gt;p         :PluginUpdate&lt;cr&gt;

&quot; *****************************************************************************************************
                &quot; Folding
                &quot; *************************************************************************************

&quot; set foldcolumn=3
&quot; set foldmethod=marker
&quot; set foldlevelstart=20
&quot; set foldlevelstart=20
set foldlevel=1
set foldmethod=marker

&quot; *****************************************************************************************************
                &quot; Auto Commands
                &quot; *************************************************************************************
    augroup AUTOGROUPONE
        autocmd!
        &quot;au BufNewFile,BufRead *.ses let s=g:SessionMan()
    augroup END

&quot; *****************************************************************************************************
                &quot; Session Setup
                &quot; *************************************************************************************
if ( 1 == 0 ) 
    if ( argc() == 0 ) 
         augroup VIMAUTOGROUPA
             autocmd!
             autocmd VimEnter * :call LoadSession()
         augroup END
    endif
    if ( argc() == 1 ) 
         let s:n=match(argv(0), &quot;vimsession$&quot;)
         if (s:n&gt;0)
             let $VIMFIRSTFILE=argv(0)
             let s:temp = argv(0)
             let s:temp = substitute(s:temp, &quot;.vimsession$&quot;, &quot;&quot;, &quot;&quot;)
             let $VIMSESSION=s:temp
             let $VIMWINDOW=&quot;NIL&quot;
             let $VIMSPLIT=&quot;NIL&quot;
             if ( 1 == 1 ) 
             augroup VIMAUTOGROUPB
                 autocmd!
                 autocmd VimEnter * :call LoadSession()
                 &quot;autocmd VimEnter * :echom &quot;POPEYE&quot;
             augroup END
             endif
         endif
    endif
endif

&quot;   ***************************************************************************************************
                &quot; Jump to Last Position When Reopening a File
                &quot; *************************************************************************************
   if has(&quot;autocmd&quot;)
      au BufReadPost * if line(&quot;&#39;\&quot;&quot;) &gt; 0 &amp;&amp; line(&quot;&#39;\&quot;&quot;) &lt;= line(&quot;$&quot;)
      \| exe &quot;normal! g&#39;\&quot;&quot; | endif
   endif
function! s:SLine(msg)
    let save_statusline = &amp;statusline  &quot; Save the current statusline
    let &amp;statusline = a:msg
    &quot;let &amp;statusline = save_statusline
endfunction
&quot;
&quot; wget -O ~/.vim/vim.txt https://raw.githubusercontent.com/archernar/basics/refs/heads/master/vim.txt
&quot; nnoremap         &lt;F7&gt; :call g:FlashCard($HOME . &quot;/.vim/1.fc&quot;)&lt;cr&gt;
&quot; nnoremap &lt;leader&gt;&lt;F7&gt; :call g:UnFlashCard()&lt;cr&gt;
&quot;   ***************************************************************************************************
                &quot; Multi Toggle
                &quot; *************************************************************************************
function! MultiToggle()
    let sMt=[]
    call add(sMt, [0, &quot;Upper Mode&quot;,                  &quot;:call ToUpperUnderCursor()&lt;cr&gt;&quot;])
    call add(sMt, [1, &quot;Lower Mode&quot;,                  &quot;:call ToLowerUnderCursor()&lt;cr&gt;&quot;])
    call add(sMt, [2, &quot;ls&quot;,                          &quot;:ls&lt;cr&gt;&quot;])
    call add(sMt, [3 ,&quot;Edit dots and configs&quot;,       &quot;:call EditDotFiles()&lt;cr&gt;&quot;])
    call add(sMt, [4, &quot;Open Vim Sheatsheet&quot;,         &quot;:e ~/.vim/vimbrief.txt&lt;cr&gt;&quot;])
    call add(sMt, [5, &quot;Reselect Visual Selection&quot;,   &quot;gv&quot;])
    call add(sMt, [6, &quot;Search for Word Under Cursor&quot;,&quot;:%s/\&lt;&lt;C-r&gt;&lt;C-w&gt;\&gt;//gI&lt;Left&gt;&lt;Left&gt;&lt;Left&gt;&quot;])
    call add(sMt, [6, &quot;6One&quot;, &quot;Two&quot;])
    call add(sMt, [7, &quot;7One&quot;, &quot;Two&quot;])
    call add(sMt, [8, &quot;8TestMeMe&quot;, &quot;silent nnoremap  &lt;F7&gt; :call g:Test()&quot; ])
    call add(sMt, [9, &quot;9One&quot;, &quot;Two&quot;])
    let g:multi_toggle_state = g:multi_toggle_state  + 1
    if g:multi_toggle_state == 7
        let g:multi_toggle_state = 0
    endif
    execute &quot;silent nnoremap &lt;F7&gt; &quot; . sMt[g:multi_toggle_state][2]
    let &amp;statusline = sMt[g:multi_toggle_state][1]
endfunction

function! g:Test()
    echom &quot;TEST TEST TEST TEST&quot;
endfunction

function! EditDotFiles()
        execute  &quot;edit ~/.bashrc&quot;
        execute  &quot;edit ~/.vimrc&quot;
        execute  &quot;edit ~/.profile&quot;
        execute  &quot;edit ~/.vim/vimbrief.txt&quot;
        execute  &quot;edit ~/.vim/vim.txt&quot;
endfunction
function! MultiToggleVoid()
        let g:multi_toggle_state = 0
endfunction

let g:multi_toggle_state = -1
let &amp;statusline = &quot;Void Mode&quot;
nnoremap &lt;F7&gt; :call MultiToggleVoid()&lt;CR&gt;
nnoremap &lt;F8&gt; :call MultiToggle()&lt;CR&gt;
nnoremap &lt;F9&gt; :call GitPopUp()&lt;CR&gt;
nnoremap &lt;F10&gt; :call UtilityPopUp(&quot;/home/mestes/vim.txt&quot;)&lt;CR&gt;



function! ToLowerUnderCursor()
  &quot; Get the current cursor position.
  let [row, col] = getpos(&#39;.&#39;)[1:2]

  &quot; Get the character under the cursor.
  let char = getline(row)[col-1]

  &quot; Check if a character exists at the cursor position (not end of line).
  if char != &quot;&quot;

    &quot; Convert the character to lowercase.
    let lower_char = tolower(char)

    &quot; Replace the character under the cursor with the lowercase version.
    call setline(row, strpart(getline(row), 0, col-1) . lower_char . strpart(getline(row), col))

    &quot; Restore the cursor position (important!).
    call cursor(row, col)
  endif
endfunction
function! ToUpperUnderCursor()
  &quot; Get the current cursor position.
  let [row, col] = getpos(&#39;.&#39;)[1:2]

  &quot; Get the character under the cursor.
  let char = getline(row)[col-1]

  &quot; Check if a character exists at the cursor position (not end of line).
  if char != &quot;&quot;

    &quot; Convert the character to uppercase.
    let upper_char = toupper(char)

    &quot; Replace the character under the cursor with the uppercase version.
    call setline(row, strpart(getline(row), 0, col-1) . upper_char . strpart(getline(row), col))

    &quot; Restore the cursor position (important!).
    call cursor(row, col)
  endif
endfunction

&quot; Map a key to call the function.  For example, map &lt;Leader&gt;u to it.
&quot; You can choose any key combination you prefer.  &lt;Leader&gt; is often \.
&quot; See :help leader for more about setting the leader key.
&quot; Example:
&quot;
&quot; hello
&quot;
&quot;
&quot; Option 1: Add the current file
nnoremap &lt;leader&gt;gaf :!git add %&lt;CR&gt;

&quot; Option 2: Add the current file and stage changes
nnoremap &lt;leader&gt;gac :!git add % &amp;&amp; git commit -m &quot;Staged changes&quot; &lt;CR&gt;

&quot; Option 3: Add all changes in the current directory
nnoremap &lt;leader&gt;gaa :!git add .&lt;CR&gt;

&quot; Option 4: Add all changes in the current directory and stage changes
nnoremap &lt;leader&gt;gss :!git add . &amp;&amp; git commit -m &quot;Staged all changes&quot; &lt;CR&gt;

&quot; Option 5: Add the current file and show git status
nnoremap &lt;leader&gt;gas :!git add %&lt;CR&gt;:!git status&lt;CR&gt;

&quot; Option 6: Add all changes in the current directory and show git status
nnoremap &lt;leader&gt;gaas :!git add .&lt;CR&gt;:!git status&lt;CR&gt;

&quot; Option 7: Add the current file and run a custom git command
&quot;nnoremap &lt;leader&gt;gac :!git add % &amp;&amp; git commit -m &lt;C-r&gt;=@%&lt;CR&gt;&lt;CR&gt;

&quot; Option 8: Add all changes in the current directory and run a custom git command
nnoremap &lt;leader&gt;gacc :!git add . &amp;&amp; git commit -m &lt;C-r&gt;=getcwd()&lt;CR&gt;&lt;CR&gt;


function! g:OpenReadOnlyFileExit()
    silent exe &quot;bd!&quot;
    echom &quot;&quot;
endfunction
function! g:BufferDelete(...)
        if (a:1 == 0)
            nnoremap &lt;silent&gt; &lt;buffer&gt; q     :call g:BufferDelete(1)&lt;cr&gt;
            nnoremap &lt;silent&gt; &lt;buffer&gt; &lt;F1&gt;  :call g:BufferDelete(1)&lt;cr&gt;
            nnoremap &lt;silent&gt; &lt;buffer&gt; &lt;esc&gt; :call g:BufferDelete(1)&lt;cr&gt;
        else
            silent exe &quot;bd!&quot;
        endif
    echom &quot;&quot;
endfunction
function! g:OpenReadOnlyFile(...)
        let l:filename = a:1
        exe &quot;set nopaste&quot;
        let l:f = l:filename
        if filereadable(l:f)
            &quot; silent exe &quot;tabnew &quot; . l:f
            silent execute &quot;edit &quot; . l:f
            silent exe &quot;set buftype=nowrite&quot;
            nnoremap &lt;silent&gt; &lt;buffer&gt; q     :call g:OpenReadOnlyFileExit()&lt;cr&gt;
            nnoremap &lt;silent&gt; &lt;buffer&gt; &lt;F1&gt;  :call g:OpenReadOnlyFileExit()&lt;cr&gt;
            nnoremap &lt;silent&gt; &lt;buffer&gt; &lt;esc&gt; :call g:OpenReadOnlyFileExit()&lt;cr&gt;
            silent exe &quot;normal gg0&quot;
        endif
        exe &quot;set paste&quot;
endfunction

&quot;https://www.baeldung.com/linux/vim-find-full-path-current-file#:~:text=The%20%25%20Register,%2C%20depending%20on%20the%20context).
&quot;let l:command = &quot;/usr/bin/git add &quot; . expand(&#39;%&#39;) . &quot;;git commit -m \&quot;Update\&quot;; git push origin master&quot;
func! MenuCB(id, result)
    if ( a:result == 1 )
        let l:command = &quot;git status &gt; /tmp/out&quot;
        call system(l:command)
        call UtilityPopUp(&quot;/tmp/out&quot;)
        &quot;execute &quot;new | r ! &quot; . l:command
        &quot;call g:BufferDelete(0)
    endif
    if ( a:result == 2 )
        let l:command = &quot;/usr/bin/git add &quot; . expand(&#39;%&#39;)
        execute &quot;new | r ! &quot; . l:command
        call g:BufferDelete(0)
    endif
    if ( a:result == 3 )
        let l:command = &quot;git commit -m \&quot;Update\&quot;&quot;
        execute &quot;new | r ! &quot; . l:command
        call g:BufferDelete(0)
    endif
    if ( a:result == 4 )
        let l:command = &quot;git push origin master&quot;
        execute &quot;new | r ! &quot; . l:command
        call g:BufferDelete(0)
    endif
    if ( a:result == 5 )
        let l:command = &quot;/usr/bin/git add &quot; . expand(&#39;%&#39;) . &quot;;git commit -m \&quot;Update\&quot;; git push origin master&quot;
        execute &quot;new | r ! &quot; . l:command
        call g:BufferDelete(0)
    endif
    if ( a:result == 6 )
        let l:command = &quot;./make&quot;
        execute &quot;new | r ! &quot; . l:command
        call g:BufferDelete(0)
    endif
    if ( a:result == 7 )
        let l:command = &quot;./deploy&quot;
        execute &quot;new | r ! &quot; . l:command
        call g:BufferDelete(0)
    endif
    if ( a:result == 8 )
        call g:UtilityPopupCommand(&quot;df -h&quot;)
    endif
    if ( a:result == 9 )
        call g:UtilityBufferCommand(&quot;cat /usr/share/vim/vim82/doc/*.txt&quot;)
    endif
    if ( a:result == 10 )
        call g:UtilityBufferCommand(&quot;cat /usr/share/vim/vim82/doc/pop*.txt&quot;)
    endif

endfunc

func! DoNothingCB(id, result)
    let l:NOTHING=0
endfunc


&quot; https://vi.stackexchange.com/questions/24462/what-are-the-new-popup-windows-in-vim-8-2
function! g:GitPopUp()
call popup_menu([&#39;Status&#39;, &#39;add&#39;, &#39;commit&#39;, &#39;push&#39;, &#39;all&#39;, &#39;make&#39;, &#39;deploy&#39;,&#39;df&#39;,&#39;vim&#39;, &#39;pop&#39; ], 
     \ #{ title: &quot;Git&quot;, callback: &#39;MenuCB&#39;, line: 25, col: 40, 
     \ highlight: &#39;Question&#39;, border: [], close: &#39;click&#39;,  padding: [1,1,0,1]} )
endfunction




&quot; *****************************************************************************************************
                &quot; Utility Popup
                &quot; *************************************************************************************
function! g:UtilityPopupCommand(...)
    call system( a:1 . &quot; &gt; /tmp/out&quot; )
    call UtilityPopUp(&quot;/tmp/out&quot;)
endfunction
let g:utilityPopupFilename = &quot;&quot;
function! g:UtilityPopUp(...)
    if filereadable(a:1)
        let g:utilityPopupFilename = a:1 
        call popup_create(readfile(a:1), #{ line: 1, col: 1, border: [], padding: [1,1,1,1] } )
        let l:id = popup_list()[0]
        call popup_move(l:id, #{ line: 2, col: 4, 
                    \ minwidth: &amp;columns -14,
                    \ maxheight: &amp;lines -8, maxwidth: &amp;columns -8,
                    \ })
        hi MyPopupColor ctermbg=black guibg=black
        call setwinvar(l:id, &#39;&amp;wincolor&#39;, &#39;MyPopupColor&#39;)
        nnoremap &lt;DOWN&gt; :call ScrollPopup(1)&lt;CR&gt;
        nnoremap &lt;UP&gt;   :call ScrollPopup(-1)&lt;CR&gt;
        nnoremap &lt;F10&gt;  :call UtilityPopUpClear(g:utilityPopupFilename)&lt;CR&gt;
    endif
endfunction
function! g:UtilityBufferCommand(...)
    call system( a:1 . &quot; &gt; /tmp/out&quot; )
    call UtilityBuffer(&quot;/tmp/out&quot;)
endfunction
function! g:UtilityBuffer(...)
    if filereadable(a:1)
        execute &quot;edit &quot; . a:1
    endif
endfunction

function! g:UtilityPopUpClear(...)
    call popup_clear(1)
    nnoremap &lt;DOWN&gt; &lt;down&gt;
    nnoremap &lt;UP&gt;   &lt;up&gt;
    nnoremap &lt;F10&gt;  :call UtilityPopUp(g:utilityPopupFilename)&lt;CR&gt;
endfunction

function! ScrollPopup(nlines)
    let winids = popup_list()
    if len(winids) == 0
        return
    endif

    &quot; Ignore hidden popups
    let prop = popup_getpos(winids[0])
    if prop.visible != 1
        return
    endif

    let firstline = prop.firstline + a:nlines
    let buf_lastline = str2nr(trim(win_execute(winids[0], &quot;echo line(&#39;$&#39;)&quot;)))
    if firstline &lt; 1
        let firstline = 1
    elseif prop.lastline + a:nlines &gt; buf_lastline
        let firstline = buf_lastline + prop.firstline - prop.lastline
    endif

    call popup_setoptions(winids[0], {&#39;firstline&#39;: firstline})
endfunction


#######################################################################################################
Processing file: a
       
  __ _ 
 / _` |
| (_| |
 \__,_|
       
Global

:h[elp] keyword - open help for keyword
:sav[eas] file - save file as
:clo[se] - close current pane
:ter[minal] - open a terminal window
K - open man page for word under the cursor
Tip Run vimtutor in a terminal to learn the first Vim commands.

Cursor movement

h - move cursor left
j - move cursor down
k - move cursor up
l - move cursor right
gj - move cursor down (multi-line text)
gk - move cursor up (multi-line text)
H - move to top of screen
M - move to middle of screen
L - move to bottom of screen
w - jump forwards to the start of a word
W - jump forwards to the start of a word (words can contain punctuation)
e - jump forwards to the end of a word
E - jump forwards to the end of a word (words can contain punctuation)
b - jump backwards to the start of a word
B - jump backwards to the start of a word (words can contain punctuation)
ge - jump backwards to the end of a word
gE - jump backwards to the end of a word (words can contain punctuation)
% - move cursor to matching character (default supported pairs: &#39;()&#39;, &#39;{}&#39;, &#39;[]&#39; 
- use :h matchpairs in vim for more info)
0 - jump to the start of the line
^ - jump to the first non-blank character of the line
$ - jump to the end of the line
g_ - jump to the last non-blank character of the line
gg - go to the first line of the document
G - go to the last line of the document
5gg or 5G - go to line 5
gd - move to local declaration
gD - move to global declaration
fx - jump to next occurrence of character x
tx - jump to before next occurrence of character x
Fx - jump to the previous occurrence of character x
Tx - jump to after previous occurrence of character x
; - repeat previous f, t, F or T movement
, - repeat previous f, t, F or T movement, backwards
} - jump to next paragraph (or function/block, when editing code)
{ - jump to previous paragraph (or function/block, when editing code)
zz - center cursor on screen
zt - position cursor on top of the screen
zb - position cursor on bottom of the screen
Ctrl + e - move screen down one line (without moving cursor)
Ctrl + y - move screen up one line (without moving cursor)
Ctrl + b - move screen up one page (cursor to last line)
Ctrl + f - move screen down one page (cursor to first line)
Ctrl + d - move cursor and screen down 1/2 page
Ctrl + u - move cursor and screen up 1/2 page

Insert mode - inserting/appending text

i - insert before the cursor
I - insert at the beginning of the line
a - insert (append) after the cursor
A - insert (append) at the end of the line
o - append (open) a new line below the current line
O - append (open) a new line above the current line
ea - insert (append) at the end of the word
Ctrl + h - delete the character before the cursor during insert mode
Ctrl + w - delete word before the cursor during insert mode
Ctrl + j - add a line break at the cursor position during insert mode
Ctrl + t - indent (move right) line one shiftwidth during insert mode
Ctrl + d - de-indent (move left) line one shiftwidth during insert mode
Ctrl + n - insert (auto-complete) next match before the cursor during insert mode
Ctrl + p - insert (auto-complete) previous match before the cursor during insert mode
Ctrl + rx - insert the contents of register x
Ctrl + ox - Temporarily enter normal mode to issue one normal-mode command x.
Esc or Ctrl + c - exit insert mode

Editing

r - replace a single character.
R - replace more than one character, until ESC is pressed.
J - join line below to the current one with one space in between
gJ - join line below to the current one without space in between
gwip - reflow paragraph
g~ - switch case up to motion
gu - change to lowercase up to motion
gU - change to uppercase up to motion
cc - change (replace) entire line
c$ or C - change (replace) to the end of the line
ciw - change (replace) entire word
cw or ce - change (replace) to the end of the word
s - delete character and substitute text (same as cl)
S - delete line and substitute text (same as cc)
xp - transpose two letters (delete and paste)
u - undo
U - restore (undo) last changed line
Ctrl + r - redo
. - repeat last command

Marking text (visual mode)

v - start visual mode, mark lines, then do a command (like y-yank)
V - start linewise visual mode
o - move to other end of marked area
Ctrl + v - start visual block mode
O - move to other corner of block
aw - mark a word
ab - a block with ()
aB - a block with {}
at - a block with &lt;&gt; tags
ib - inner block with ()
iB - inner block with {}
it - inner block with &lt;&gt; tags
Esc or Ctrl + c - exit visual mode

Visual commands

&gt; - shift text right
&lt; - shift text left
y - yank (copy) marked text
d - delete marked text
~ - switch case
u - change marked text to lowercase
U - change marked text to uppercase

Registers

:reg[isters] - show registers content
&quot;xy - yank into register x
&quot;xp - paste contents of register x
&quot;+y - yank into the system clipboard register
&quot;+p - paste from the system clipboard register
Tip Registers are being stored in ~/.viminfo, and will be loaded again on next restart of vim.

Special registers:

0 - last yank
&quot; - unnamed register, last delete or yank
% - current file name
# - alternate file name
* - clipboard contents (X11 primary)
+ - clipboard contents (X11 clipboard)
/ - last search pattern
: - last command-line
. - last inserted text
- - last small (less than a line) delete
= - expression register
_ - black hole register

Marks and positions

:marks - list of marks
ma - set current position for mark A
`a - jump to position of mark A
y`a - yank text to position of mark A
`0 - go to the position where Vim was previously exited
`&quot; - go to the position when last editing this file
`. - go to the position of the last change in this file
`` - go to the position before the last jump
:ju[mps] - list of jumps
Ctrl + i - go to newer position in jump list
Ctrl + o - go to older position in jump list
:changes - list of changes
g, - go to newer position in change list
g; - go to older position in change list
Ctrl + ] - jump to the tag under cursor
Tip To jump to a mark you can either use a backtick (`) or an apostrophe (&#39;).
Using an apostrophe jumps to the beginning (first non-blank) of the line holding the mark.

Macros

qa - record macro a
q - stop recording macro
@a - run macro a
@@ - rerun last run macro

Cut and paste

yy - yank (copy) a line
2yy - yank (copy) 2 lines
yw - yank (copy) the characters of the word from the cursor position to the start of the next word
yiw - yank (copy) word under the cursor
yaw - yank (copy) word under the cursor and the space after or before it
y$ or Y - yank (copy) to end of line
p - put (paste) the clipboard after cursor
P - put (paste) before cursor
gp - put (paste) the clipboard after cursor and leave cursor after the new text
gP - put (paste) before cursor and leave cursor after the new text
dd - delete (cut) a line
2dd - delete (cut) 2 lines
dw - delete (cut) the characters of the word from the cursor position to the start of the next word
diw - delete (cut) word under the cursor
daw - delete (cut) word under the cursor and the space after or before it
:3,5d - delete lines starting from 3 to 5
Tip You can also use the following characters to specify the range:
e.g.
:.,$d - From the current line to the end of the file
:.,1d - From the current line to the beginning of the file
:10,1d - From the 10th line to the beginning of the file
:g/{pattern}/d - delete all lines containing pattern
:g!/{pattern}/d - delete all lines not containing pattern
d$ or D - delete (cut) to the end of the line
x - delete (cut) character

Indent text

&gt;&gt; - indent (move right) line one shiftwidth
&lt;&lt; - de-indent (move left) line one shiftwidth
&gt;% - indent a block with () or {} (cursor on brace)
&lt;% - de-indent a block with () or {} (cursor on brace)
&gt;ib - indent inner block with ()
&gt;at - indent a block with &lt;&gt; tags
3== - re-indent 3 lines
=% - re-indent a block with () or {} (cursor on brace)
=iB - re-indent inner block with {}
gg=G - re-indent entire buffer
]p - paste and adjust indent to current line

Exiting

:w - write (save) the file, but don&#39;t exit
:w !sudo tee % - write out the current file using sudo
:wq or :x or ZZ - write (save) and quit
:q - quit (fails if there are unsaved changes)
:q! or ZQ - quit and throw away unsaved changes
:wqa - write (save) and quit on all tabs

Search and replace

/pattern - search for pattern
?pattern - search backward for pattern
\vpattern - &#39;very magic&#39; pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)
n - repeat search in same direction
N - repeat search in opposite direction
:%s/old/new/g - replace all old with new throughout file
:%s/old/new/gc - replace all old with new throughout file with confirmations
:noh[lsearch] - remove highlighting of search matches

Search in multiple files

:vim[grep] /pattern/ {`{file}`} - search for pattern in multiple files
e.g. :vim[grep] /foo/ **/*
:cn[ext] - jump to the next match
:cp[revious] - jump to the previous match
:cope[n] - open a window containing the list of matches
:ccl[ose] - close the quickfix window

Tabs

:tabnew or :tabnew {page.words.file} - open a file in a new tab
Ctrl + wT - move the current split window into its own tab
gt or :tabn[ext] - move to the next tab
gT or :tabp[revious] - move to the previous tab
#gt - move to tab number #
:tabm[ove] # - move current tab to the #th position (indexed from 0)
:tabc[lose] - close the current tab and all its windows
:tabo[nly] - close all tabs except for the current one
:tabdo command - run the command on all tabs (e.g. :tabdo q - closes all opened tabs)

Working with multiple files

:e[dit] file - edit a file in a new buffer
:bn[ext] - go to the next buffer
:bp[revious] - go to the previous buffer
:bd[elete] - delete a buffer (close a file)
:b[uffer]# - go to a buffer by index #
:b[uffer] file - go to a buffer by file
:ls or :buffers - list all open buffers
:sp[lit] file - open a file in a new buffer and split window
:vs[plit] file - open a file in a new buffer and vertically split window
:vert[ical] ba[ll] - edit all buffers as vertical windows
:tab ba[ll] - edit all buffers as tabs
Ctrl + ws - split window
Ctrl + wv - split window vertically
Ctrl + ww - switch windows
Ctrl + wq - quit a window
Ctrl + wx - exchange current window with next one
Ctrl + w= - make all windows equal height &amp; width
Ctrl + wh - move cursor to the left window (vertical split)
Ctrl + wl - move cursor to the right window (vertical split)
Ctrl + wj - move cursor to the window below (horizontal split)
Ctrl + wk - move cursor to the window above (horizontal split)
Ctrl + wH - make current window full height at far left (leftmost vertical window)
Ctrl + wL - make current window full height at far right (rightmost vertical window)
Ctrl + wJ - make current window full width at the very bottom (bottommost horizontal window)
Ctrl + wK - make current window full width at the very top (topmost horizontal window)

Diff

zf - manually define a fold up to motion
zd - delete fold under the cursor
za - toggle fold under the cursor
zo - open fold under the cursor
zc - close fold under the cursor
zr - reduce (open) all folds by one level
zm - fold more (close) all folds by one level
zi - toggle folding functionality
]c - jump to start of next change
[c - jump to start of previous change
do or :diffg[et] - obtain (get) difference (from other buffer)
dp or :diffpu[t] - put difference (to other buffer)
:diffthis - make current window part of diff
:dif[fupdate] - update differences
:diffo[ff] - switch off diff mode for current window

#######################################################################################################
Processing file: bash.functions
 _               _        __                  _   _                 
| |__   __ _ ___| |__    / _|_   _ _ __   ___| |_(_) ___  _ __  ___ 
| &#39;_ \ / _` / __| &#39;_ \  | |_| | | | &#39;_ \ / __| __| |/ _ \| &#39;_ \/ __|
| |_) | (_| \__ \ | | |_|  _| |_| | | | | (__| |_| | (_) | | | \__ \
|_.__/ \__,_|___/_| |_(_)_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|___/
                                                                    
#
# bash functions
############################################################################################
# ./BashDirName.sh
############################################################################################
No need for basename, and especially no need for a subshell running pwd (which adds an extra, and expensive, fork operation); the shell can do this internally using parameter expansion:

result=${PWD##*/}          # to assign to a variable
result=${result:-/}        # to correct for the case where PWD=/

printf &#39;%s\n&#39; &quot;${PWD##*/}&quot; # to print to stdout
                           # ...more robust than echo for unusual names
                           #    (consider a directory named -e or -n)

printf &#39;%q\n&#39; &quot;${PWD##*/}&quot; # to print to stdout, quoted for use as shell input
                           # ...useful to make hidden characters readable.
Note that if you&#39;re applying this technique in other circumstances (not PWD, but some other variable holding a directory name), you might need to trim any trailing slashes. The below uses bash&#39;s extglob support to work even with multiple trailing slashes:

dirname=/path/to/somewhere//
shopt -s extglob           # enable +(...) glob syntax
result=${dirname%%+(/)}    # trim however many trailing slashes exist
result=${result##*/}       # remove everything before the last / that still remains
result=${result:-/}        # correct for dirname=/ case
printf &#39;%s\n&#39; &quot;$result&quot;


############################################################################################
# ./CheckIfFileExists.sh
############################################################################################
#Check if file exists

if [[ -f &lt;file&gt; ]]
then
    echo &quot;&lt;file&gt; exists on your filesystem.&quot;
fi


# Check if file does not exist

if [[ ! -f &lt;file&gt; ]]
then
    echo &quot;&lt;file&gt; does not exist on your filesystem.&quot;
fi


# Check if directory exist

if [[ -d &quot;$DIRECTORY&quot; ]]
then
    echo &quot;$DIRECTORY exists on your filesystem.&quot;
fi



############################################################################################
# ./console.sh
############################################################################################
consolebar () {
    echo &quot;********************************************************************************************&quot;
}
consolemsg () {
#   consolebar
    echo &quot;** $1&quot;
#   consolebar
    A=$A
}
optconsolemsg () {
#    echo &quot;** $1&quot;
    A=$A
}


############################################################################################
# ./finddirectories.sh
############################################################################################
find . -type d


############################################################################################
# ./findfiles1g.sh
############################################################################################
find . -type f -size +1G 2&gt;/dev/null | sed &#39;s#^.#/tmp#&#39;


############################################################################################
# ./findfiles2g.sh
############################################################################################
find . -type f -size +2G 2&gt;/dev/null | sed &#39;s#^.#/tmp#&#39;


############################################################################################
# ./findfiles.sh
############################################################################################
find . -type f


############################################################################################
# ./find_secrets.sh
############################################################################################
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp1=/tmp/$$_$$
trap &#39;exit 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot;&#39; EXIT
rm -f &quot;$Tmp&quot;  &gt;/dev/null 2&gt;&amp;1

# Define patterns for sensitive data (expand as needed)
# patterns=(
#     &quot;password[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot;  # Basic password pattern
#     &quot;secret[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot;   # Secret pattern
#     &quot;key[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot;      # Key pattern
#     &quot;AWS_ACCESS_KEY_ID[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[A-Z0-9]*[\&quot;&#39;]?&quot; # AWS Access Key ID
#     &quot;AWS_SECRET_ACCESS_KEY[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[a-zA-Z0-9/+=]*[\&quot;&#39;]?&quot; # AWS Secret Access Key
#     &quot;api_key[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # API Key pattern
#     &quot;database_url[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # Database URL
#     &quot;connection_string[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # Connection String
#     &quot;private_key[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # Private Key
#     &quot;client_secret[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # Client Secret
#     &quot;oauth_token[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # OAuth Token
#     &quot;bearer_token[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # Bearer Token
# )
. ./secure_patterns

# Define file types to search (customize as needed)
file_types=(&quot;*.sh&quot; &quot;*.py&quot; &quot;*.js&quot; &quot;*.php&quot; &quot;*.html&quot; &quot;*.xml&quot; &quot;*.json&quot; &quot;*.txt&quot; &quot;*.conf&quot; &quot;*.yaml&quot; &quot;*.yml&quot; &quot;*.sh&quot; &quot;*.bash&quot; &quot;*.c&quot; &quot;*.cpp&quot; &quot;*.java&quot; &quot;*.go&quot;)


# Function to search a single file
search_file() {
    local file=&quot;$1&quot;
    local line_num
    local line

    for pattern in &quot;${patterns[@]}&quot;; do
        while IFS= read -r line; do
            line_num=$((line_num + 1))
            if [[ &quot;$line&quot; =~ $pattern ]]; then
                echo &quot;File: $file, Line: $line_num: $line, Pattern: $pattern&quot; &gt;&gt; $Tmp
            fi
        done &lt; &quot;$file&quot;
        line_num=0 # Reset line number for next pattern
    done
}

# Find files and search them
# find . \( -name &quot;${file_types[@]}&quot; \) -print0 | while IFS= read -r -d $&#39;\0&#39; file; do
find . \( -name &quot;*.sh&quot; \) -print0 | while IFS= read -r -d $&#39;\0&#39; file; do
    if [ -f &quot;$file&quot; ]; then # Check if it&#39;s a regular file (not a directory)
      search_file &quot;$file&quot;
    fi
done



if [ -f $Tmp ]; then
    echo &quot;!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!&quot;
    echo &quot;!!!!    Secrets Found    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!&quot;
    echo &quot;!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!&quot;
    cat $Tmp | sort | uniq
    exit 1
fi

echo &quot;Finished searching.&quot;
exit 0


############################################################################################
# ./ForEachDirectory.sh
############################################################################################
for d in */ ; do
    echo &quot;$d&quot;
done


############################################################################################
# ./ForEachFile.sh
############################################################################################
for f in ./*.java; do MakeHTMLCodePage &quot;$f&quot;; done


############################################################################################
# ./fullpathd.sh
############################################################################################
find . -type d 2&gt;/dev/null | sed &#39;s#^.#/tmp#&#39;


############################################################################################
# ./fullpath.sh
############################################################################################
find . -type f 2&gt;/dev/null | sed &#39;s#^.#/tmp#&#39;


############################################################################################
# ./gitgraphlog.sh
############################################################################################
git log --graph --all --date=relative --pretty=format:&#39;%Cred%h %Creset%&lt;|(100,trunc)%s %C(bold blue)&lt;%an&gt;%Creset %Cgreen(%cd)%Creset%C(auto)%d&#39;


############################################################################################
# ./IsFileEmpty.sh
############################################################################################
if [ -s /tmp/myfile.txt ]
then
     echo &quot;File not empty&quot;
else
     echo &quot;File empty&quot;
fi


############################################################################################
# ./IsHostUp.sh
############################################################################################

hostname_or_ip_address=$1
if ping -q -c 1 -W 1 wind2 &gt;/dev/null 2&gt;&amp;1; then
    echo &quot;$hostname_or_ip_address is alive&quot;
else
    echo &quot;$hostname_or_ip_address is pining for the fjords&quot;
fi


############################################################################################
# ./isnfs.sh
############################################################################################
isnfs () {                                                                                                                       
    LOCAL=`stat -f -c %T &quot;$1&quot;`                                                                                                   
    if [ &quot;$LOCAL&quot; == &quot;nfs&quot; ]; then                                                                                               
         RETVAL=&quot;YES&quot;                                                                                                             
    else                                                                                                                         
         RETVAL=&quot;NO&quot;                                                                                                              
    fi                                                                                                                           
}


############################################################################################
# ./MonitorOpenNetstatConnections.sh
############################################################################################
watch -n 1 &#39;netstat -tpanl | grep ESTABLISHED&#39;


############################################################################################
# ./slapfilename.sh
############################################################################################
#!/usr/bin/bash
Tmp=/tmp/$$

if [ $# -eq 0 ]
  then
        rm -f ./taggerdo

        for filename in *.$1; do
            FILE=&quot;$filename&quot;
            NAME=&quot;$filename&quot;
            NAME=`echo &quot;$NAME&quot;     | sed &quot;s/ \[.*\]//g&quot;`
            NAME=`echo &quot;$NAME&quot;     | sed &quot;s/^[&amp;]//g&quot;`
            NAME=`echo &quot;$NAME&quot;     | sed &quot;s/[&#39;]//g&quot;`
            NAME=`echo &quot;$NAME&quot; | sed &quot;s/_/ /g&quot;`
            NAME=`echo &quot;$NAME&quot; | sed &quot;s/  / /g&quot;`
            NAME=`echo &quot;$NAME&quot; | sed &quot;s/  / /g&quot;`
            NAME=`echo &quot;$NAME&quot; | sed &quot;s/  / /g&quot;`
            NAME=`echo &quot;$NAME&quot; | sed &quot;s/^ //&quot;`
            NAME=`echo &quot;$NAME&quot; | sed &quot;s/^ //&quot;`
            NAME=`echo &quot;$NAME&quot; | sed &quot;s/^ //&quot;`
            NAME=`echo &quot;$NAME&quot; | sed &quot;s/ [.]mp3/.mp3/&quot;`
            NAME=`echo &quot;$NAME&quot; | sed &quot;s/ [.]mp3/.mp3/&quot;`
            NAME=`echo &quot;$NAME&quot; | sed &quot;s/ [.]mp3/.mp3/&quot;`
           CMD=&quot;mv \&quot;./$filename\&quot; \&quot;$NAME\&quot;&quot;
           echo $CMD
           echo $CMD &gt; ./taggerdo
           chmod 777  ./taggerdo
           ./taggerdo
           rm -f ./taggerdo
        done

fi


############################################################################################
# ./topTenCommands.sh
############################################################################################
history | awk &#39;{CMD[$2]++;count++;}END { for (a in CMD)print CMD[a] &quot; &quot; CMD[a]/count*100 &quot;% &quot; a;}&#39; | grep -v &quot;./&quot; | column -c3 -s &quot; &quot; -t | sort -nr | nl |  head -n10


############################################################################################
# ./update.sh
############################################################################################
rm -f zed zzed zerd qed qqed fed ffed xx yy xxx yyy moe

rm -f README.md
PART=header
echo &quot;# $PART&quot;      &gt;&gt; README.md
echo &quot;&quot;             &gt;&gt; README.md
echo &quot;\`\`\`&quot;       &gt;&gt; README.md
cat $PART           &gt;&gt; README.md
echo &quot;\`\`\`&quot;       &gt;&gt; README.md

PART=update
echo &quot;# $PART&quot;      &gt;&gt; README.md
echo &quot;&quot;             &gt;&gt; README.md
echo &quot;\`\`\`&quot;       &gt;&gt; README.md
cat $PART           &gt;&gt; README.md
echo &quot;\`\`\`&quot;       &gt;&gt; README.md

PART=getheader
echo &quot;# $PART&quot;      &gt;&gt; README.md
echo &quot;&quot;             &gt;&gt; README.md
echo &quot;\`\`\`&quot;       &gt;&gt; README.md
cat $PART           &gt;&gt; README.md
echo &quot;\`\`\`&quot;       &gt;&gt; README.md

cat README.md
git add README.md


echo &quot;#&quot;                      &gt; bash.functions
echo &quot;# bash functions&quot;      &gt;&gt; bash.functions
for fn in ./*.sh; do
    echo &quot;############################################################################################&quot; &gt;&gt; bash.functions
    echo &quot;# $fn&quot;                 &gt;&gt; bash.functions
    echo &quot;############################################################################################&quot; &gt;&gt; bash.functions
    cat &quot;$fn&quot;                    &gt;&gt; bash.functions
    echo &quot;&quot;                      &gt;&gt; bash.functions
    echo &quot;&quot;                      &gt;&gt; bash.functions
done
git add bash.functions


git status
git add -u;git commit  -m &quot;Update&quot;
git push -u origin master

cp ./getheader       /etc/center
cp ./bash.functions  /etc/center





############################################################################################
# ./UpperToLowerCase.sh
############################################################################################
str=&quot;Hello World&quot;
lowerStr=$(echo &quot;$str&quot; | tr &#39;[:upper:]&#39; &#39;[:lower:]&#39;)
 
echo &quot;Input String: $str&quot;
echo &quot;Result String:  $lowerStr&quot;


############################################################################################
# ./WatchCpuProcesses.sh
############################################################################################
watch -n 1 &#39;ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head&#39;



#######################################################################################################
Processing file: bash.justhelp
 _               _        _           _   _          _       
| |__   __ _ ___| |__    (_)_   _ ___| |_| |__   ___| |_ __  
| &#39;_ \ / _` / __| &#39;_ \   | | | | / __| __| &#39;_ \ / _ \ | &#39;_ \ 
| |_) | (_| \__ \ | | |_ | | |_| \__ \ |_| | | |  __/ | |_) |
|_.__/ \__,_|___/_| |_(_)/ |\__,_|___/\__|_| |_|\___|_| .__/ 
                       |__/                           |_|    
#================================================================
# HEADER
#=====================:===========================================
#% SYNOPSIS
#+    ${SCRIPT_NAME} [-hv] [-o[file]] args ...
#%
#% DESCRIPTION
#%    This is a script template
#%    to start any good shell script.
#%
#% OPTIONS
#%    -o [file], --output=[file]    Set log file (default=/dev/null)
#%                                  use DEFAULT keyword to autoname file
#%                                  The default value is /dev/null.
#%    -t, --timelog                 Add timestamp to log (&quot;+%y/%m/%d@%H:%M:%S&quot;)
#%    -x, --ignorelock              Ignore if lock file exists
#%    -h, --help                    Print this help
#%    -v, --version                 Print script information
#%
#% EXAMPLES
#%    ${SCRIPT_NAME} -o DEFAULT arg1 arg2
#%
#================================================================
#- IMPLEMENTATION
#-    version         ${SCRIPT_NAME} 0.0.1
#-    author          MJE
#-    copyright       Copyright (c) All Rights Reserved
#-    license         All Rights Reserved
#-    script_id       0.0.1
#-
#================================================================
#  HISTORY
#     2024/12/30 : XXX : Script creation
# 
#================================================================
#  DEBUG OPTION
#    set -n  # Uncomment to check your syntax, without execution.
#    set -x  # Uncomment to debug this shell script
#
#================================================================
# END_OF_HEADER
#================================================================

#== needed variables ==#
SCRIPT_HEADSIZE=$(head -200 ${0} |grep -n &quot;^# END_OF_HEADER&quot; | cut -f1 -d:)
SCRIPT_NAME=&quot;$(basename ${0})&quot;

#== usage functions ==#
usage() { printf &quot;Usage: &quot;; head -${SCRIPT_HEADSIZE:-99} ${0} | grep -e &quot;^#+&quot; | sed -e &quot;s/^#+[ ]*//g&quot; -e &quot;s/\${SCRIPT_NAME}/${SCRIPT_NAME}/g&quot; ; }
usagefull() { head -${SCRIPT_HEADSIZE:-99} ${0} | grep -e &quot;^#[%+-]&quot; | sed -e &quot;s/^#[%+-]//g&quot; -e &quot;s/\${SCRIPT_NAME}/${SCRIPT_NAME}/g&quot; ; }
scriptinfo() { head -${SCRIPT_HEADSIZE:-99} ${0} | grep -e &quot;^#-&quot; | sed -e &quot;s/^#-//g&quot; -e &quot;s/\${SCRIPT_NAME}/${SCRIPT_NAME}/g&quot;; }

#######################################################################################################
Processing file: bash.library
 _               _       _ _ _                          
| |__   __ _ ___| |__   | (_) |__  _ __ __ _ _ __ _   _ 
| &#39;_ \ / _` / __| &#39;_ \  | | | &#39;_ \| &#39;__/ _` | &#39;__| | | |
| |_) | (_| \__ \ | | |_| | | |_) | | | (_| | |  | |_| |
|_.__/ \__,_|___/_| |_(_)_|_|_.__/|_|  \__,_|_|   \__, |
                                                  |___/ 
# *********************************************************DATEOMATIC: Mon Mar 24 11:16:15 EDT 2025
# *********************************************************HASHOMATIC: c8ade33411894a2b0873038ea166f75c
DEBUGLEVEL=1

function repeat_char() {
  local char=&quot;$1&quot;
  local count=&quot;$2&quot;
  local result=&quot;&quot;

  if [[ -z &quot;$char&quot; || -z &quot;$count&quot; ]]; then
    echo &quot;Usage: repeat_char &lt;character&gt; &lt;count&gt;&quot; &gt;&amp;2
    return 1
  fi

  if [[ &quot;$count&quot; -lt 0 ]]; then
    echo &quot;Count must be a non-negative integer.&quot; &gt;&amp;2
    return 1
  fi

  for ((i = 0; i &lt; count; i++)); do
    result+=&quot;$char&quot;
  done

  echo &quot;$result&quot;
}
function longest_string_length() {
  local max_length=0
  local current_length
  local line

  while IFS= read -r line; do
    current_length=${#line}
    if [[ $current_length -gt $max_length ]]; then
      max_length=$current_length
    fi
  done

  echo &quot;$max_length&quot;
}
function fecho() {
  echo &quot;$FUNCNAME : $1 $2 $3 $4 $5&quot;
}
function fdebug() {
    if [ &quot;$DEBUGLEVEL&quot; -gt &quot;0&quot; ]; then
        echo &quot;DBG $FUNCNAME : $1 $2 $3 $4 $&quot;
    fi
}
# show up to 3 parent dirs, except ~, resolve all other dir aliases
function git_toplevel() {
     if [ -d &quot;.git&quot; ]; then
         git rev-parse --show-toplevel 2&gt; /dev/null | sed -e &quot;s,^$HOME,~,&quot;
     fi
}
function git_branch() {
     #git branch 2&gt; /dev/null | sed -e &#39;/^[^*]/d&#39; -e &#39;s/* \(.*\)/ (\1)/&#39;
     if [ -d &quot;.git&quot; ]; then
         git branch 2&gt; /dev/null | sed &#39;s/^..//&#39; | sed &#39;s/master/m/&#39;
     fi
}
function git_origin() {
     # git branch 2&gt; /dev/null | sed -e &#39;/^[^*]/d&#39; -e &#39;s/* \(.*\)/ (\1)/&#39;
     if [ -d &quot;.git&quot; ]; then
         git config --get remote.origin.url 2&gt; /dev/null
     fi
}
function git_originsync() {
     if [ -d &quot;.git&quot; ]; then
         git config color.ui false
         git branch -vv 2&gt; /dev/null |  gawk &#39;match($0, /\[([^\]]+)\]/, a) { print a[1] }&#39; | sed &#39;s/origin/o/&#39; | sed &#39;s/master/m/&#39; | sed &#39;s/ ahead /+/&#39;
     else
         echo &quot;&quot;
     fi
}
function collapse_pwd() {
    curr_pwd=$(pwd | sed -e &quot;s,^$HOME,~,&quot;)
    echo $curr_pwd
}
function collapse_hostname() {
    curr_hostname=$(hostname)
    echo $curr_hostname
}

function backup_file() {
  local filename=&quot;$1&quot;
  local backup_dir=&quot;$2&quot; # New argument for backup directory
  local timestamp=$(date +%Y%m%d%H%M%S)
  local backup_filename=&quot;${filename##*/}.backup.${timestamp}&quot; # Extract filename only
  local backup_path=&quot;${backup_dir}/${backup_filename}&quot;

  if [ -f &quot;$filename&quot; ]; then
    if [ -d &quot;$backup_dir&quot; ]; then # Check if backup directory exists
      cp &quot;$filename&quot; &quot;$backup_path&quot;
      #echo &quot;File &#39;$filename&#39; backed up to &#39;$backup_path&#39;.&quot;
    else
      #echo &quot;Error: Backup directory &#39;$backup_dir&#39; does not exist.&quot;
      return 1
    fi

  else
    #echo &quot;Error: File &#39;$filename&#39; not found.&quot;
    return 1
  fi
}
# Example usage:
# backup_file my_file.txt /path/to/backup/directory


# ****************************************************************************************************
# ****************************************************************************************************

# --- String Manipulation ---

# Trims leading and trailing whitespace from a string.
function trim() {
  local str=&quot;$1&quot;
  printf &quot;%s&quot; &quot;${str#&quot;${str%%[![:space:]]*}&quot;}&quot; &quot;${str%&quot;${str##*[![:space:]]}&quot;}&quot;
}
remove_leading_whitespace() {
         local input=&quot;$1&quot;       # Bash-Function-Args
  local output=&quot;${input#&quot;${input%%[![:space:]]*}&quot;}&quot;
  echo &quot;$output&quot;
}

# Checks if a string starts with a given prefix.
function starts_with() {
         local string=&quot;$1&quot;;local prefix=&quot;$2&quot;  # Bash-Function-Args
  [[ &quot;$string&quot; == &quot;$prefix&quot;* ]]
}

# Checks if a string ends with a given suffix.
function ends_with() {
         local string=&quot;$1&quot;;local suffix=&quot;$2&quot;  # Bash-Function-Args
  [[ &quot;$string&quot; == *&quot;$suffix&quot; ]]
}

# Checks if a string contains a substring.
function contains() {
         local string=&quot;$1&quot;;local substring=&quot;$2&quot;  # Bash-Function-Args
  [[ &quot;$string&quot; == *&quot;$substring&quot;* ]]
}

# Replaces all occurrences of a substring in a string.
function replace() {
         local string=&quot;$1&quot;;local old=&quot;$2&quot;;local new=&quot;$3&quot;  # Bash-Function-Args
  printf &quot;%s\n&quot; &quot;${string//$old/$new}&quot;
}

# Extracts a substring based on start and end indices. (1-based indexing)
function substring() {
         local string=&quot;$1&quot;;local start=&quot;$2&quot;;local length=&quot;$3&quot;  # Bash-Function-Args
  if [[ -z &quot;$length&quot; ]]; then
    printf &quot;%s\n&quot; &quot;${string:$((start - 1))}&quot;
  else
    printf &quot;%s\n&quot; &quot;${string:$((start - 1)):$length}&quot;
  fi
}

# --- File and Directory Operations ---

# Creates a directory if it doesn&#39;t exist.
function mkdir_p() {
  mkdir -p &quot;$1&quot;
}

# Checks if a file or directory exists.
function exists() {
  [[ -e &quot;$1&quot; ]]
}

# Checks if a file exists.
function is_file() {
  [[ -f &quot;$1&quot; ]]
}

# Checks if a directory exists.
function is_dir() {
  [[ -d &quot;$1&quot; ]]
}

# Gets the absolute path of a file or directory.
function abspath() {
  local path=&quot;$1&quot;
  if [[ -z &quot;$path&quot; ]]; then
    pwd
  else
    realpath &quot;$path&quot;
  fi
}

# Gets the filename from a path.
function basename() {
  local path=&quot;$1&quot;
  printf &quot;%s\n&quot; &quot;$(basename &quot;$path&quot;)&quot;
}

# Gets the directory from a path.
function dirname() {
  local path=&quot;$1&quot;
  printf &quot;%s\n&quot; &quot;$(dirname &quot;$path&quot;)&quot;
}

# Gets the file extension from a path.
function extension() {
  local path=&quot;$1&quot;
  printf &quot;%s\n&quot; &quot;${path##*.}&quot;
}

# Copies a file or directory recursively.
function cp_r() {
  cp -r &quot;$1&quot; &quot;$2&quot;
}

# Moves a file or directory.
function mv_f() {
  mv -f &quot;$1&quot; &quot;$2&quot;
}

# Removes a file or directory recursively.
function rm_rf() {
  rm -rf &quot;$1&quot;
}

# --- System and Process Utilities ---

# Checks if a command is available.
function command_exists() {
  command -v &quot;$1&quot; &amp;&gt; /dev/null
}

# Gets the process ID (PID) of a process by name.
function pidof_name() {
         local name=&quot;$1&quot;               # Bash-Function-Args
  pidof &quot;$name&quot;
}

# Kills a process by name.
function kill_name() {
         local name=&quot;$1&quot;               # Bash-Function-Args
  pkill &quot;$name&quot;
}

# Kills a process by PID.
function kill_pid() {
         local pid=&quot;$1&quot;               # Bash-Function-Args
  kill &quot;$pid&quot;
}

# Runs a command and returns its exit code.
function run_and_exit_code() {
  &quot;$@&quot;
  echo $?
}

# Runs a command and returns its output.
function run_and_output() {
  &quot;$@&quot;
}

#Runs a command and returns its error.
function run_and_error() {
  &quot;$@&quot; 2&gt;&amp;1 &gt;/dev/null
}
# --- Array Manipulation ---

# Checks if an array contains a value.
function array_contains() {
         local needle=&quot;$1&quot;               # Bash-Function-Args
  shift
  local haystack=(&quot;${@}&quot;)
  local found=0
  for item in &quot;${haystack[@]}&quot;; do
    if [[ &quot;$item&quot; == &quot;$needle&quot; ]]; then
      found=1
      break
    fi
  done
  if [[ $found -eq 1 ]]; then
    return 0 # True
  else
    return 1 # False
  fi
}

# Joins array elements with a delimiter.
function array_join() {
         local delimiter=&quot;$1&quot;               # Bash-Function-Args
  shift
  local array=(&quot;${@}&quot;)
  local IFS=&quot;$delimiter&quot;
  echo &quot;${array[*]}&quot;
}

# --- Networking ---

# Checks if a host is reachable.
function is_reachable() {
  ping -c 1 -W 1 &quot;$1&quot; &amp;&gt; /dev/null
}

# Checks if a port is open.
# is_port_open() {
#   timeout 1 bash -c &#39;&lt;/dev/tcp/&#39;&quot;$1&quot;&#39;/&#39;&quot;$2&quot; 2&gt;/dev/null&#39;
# }

# --- Input/Output ---

# Prints a message to stderr.
function eprint() {
  echo &quot;$1&quot; &gt;&amp;2
}

# Reads a line from stdin with a prompt.
function read_prompt() {
  read -p &quot;$1&quot; &quot;$2&quot;
}

# --- Time and Date ---

# Gets the current timestamp in milliseconds.
function timestamp_ms() {
  date +%s%3N
}

function scan_for_secrets() {
         local file=&quot;$1&quot;               # Bash-Function-Args

  if [[ -z &quot;$file&quot; ]]; then
    echo &quot;Usage: scan_for_secrets &lt;file&gt;&quot;
    return 1
  fi

  if [[ ! -f &quot;$file&quot; ]]; then
    echo &quot;Error: File &#39;$file&#39; not found.&quot;
    return 1
  fi

  # Define patterns to search for (add/modify as needed)
  local patterns=(
    &quot;API_KEY=[a-zA-Z0-9_-]{20,}&quot;
    &quot;SECRET_KEY=[a-zA-Z0-9_-]{20,}&quot;
    &quot;PASSWORD=[a-zA-Z0-9_-]{8,}&quot;
    &quot;AWS_ACCESS_KEY_ID=[A-Z0-9]{20}&quot;
    &quot;AWS_SECRET_ACCESS_KEY=[A-Za-z0-9+/]{40}&quot;
    &quot;ssh-rsa [A-Za-z0-9+/=]{20,}&quot;
    &quot;ssh-ed25519 [A-Za-z0-9+/=]{20,}&quot;
    &quot;-----BEGIN RSA PRIVATE KEY-----&quot;
    &quot;-----BEGIN PGP PRIVATE KEY BLOCK-----&quot;
    &quot;-----BEGIN OPENSSH PRIVATE KEY-----&quot;
    &quot;Bearer [A-Za-z0-9._-]{20,}&quot;
    &quot;Authorization: Basic [A-Za-z0-9+/=]{20,}&quot;
    &quot;Authorization: Token [A-Za-z0-9]{20,}&quot;
    &quot;[a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+&quot; #look for username:password type strings.
    &quot;PGPASSWORD=[a-zA-Z0-9_-]{8,}&quot; # postgres password
    &quot;DATABASE_URL=postgres://[a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+@&quot; # postgres database url, catches username and password.
    &quot;MONGO_URI=mongodb://[a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+@&quot; #mongodb uri, catches username and password
    &quot;password[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot;  # Basic password pattern
    &quot;secret[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot;   # Secret pattern
    &quot;key[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot;      # Key pattern
    &quot;AWS_ACCESS_KEY_ID[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[A-Z0-9]*[\&quot;&#39;]?&quot; # AWS Access Key ID
    &quot;AWS_SECRET_ACCESS_KEY[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[a-zA-Z0-9/+=]*[\&quot;&#39;]?&quot; # AWS Secret Access Key
    &quot;api_key[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # API Key pattern
    &quot;database_url[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # Database URL
    &quot;connection_string[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # Connection String
    &quot;private_key[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # Private Key
    &quot;client_secret[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # Client Secret
    &quot;oauth_token[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # OAuth Token
    &quot;bearer_token[[:space:]]*[:=][[:space:]]*[\&quot;&#39;]?[^\&quot;&#39;]*[\&quot;&#39;]?&quot; # Bearer Token
  )

    # &quot;export [A-Z_]+=[\&quot;&#39;]?[A-Za-z0-9_\\-./+=@$%^&amp;*()!~`?&lt;&gt;:;&#39;]+&quot; # look for exported environment variables.
  local found=0

  for pattern in &quot;${patterns[@]}&quot;; do
    if grep -E &quot;$pattern&quot; &quot;$file&quot; &gt; /dev/null; then
      found=1
      echo &quot;Potential secret found in &#39;$file&#39; matching pattern: &#39;$pattern&#39;&quot;
      grep -E &quot;$pattern&quot; &quot;$file&quot;
    fi
  done

  if [[ &quot;$found&quot; -eq 0 ]]; then
    echo &quot;No potential secrets found in &#39;$file&#39;.&quot;
  fi

  return 0
}

function isSameHash() {
    local FILE=&quot;$1&quot;               # Bash-Function-Args
    local tmp=/tmp/HASHCHECK_$$
    local CH=$(md5sum &quot;$FILE&quot; | awk &#39;{print $1}&#39;)
    if [[ &quot;$CH&quot; == &quot;$OH&quot; ]]; then
        echo &quot;1&quot;
    else
        echo &quot;0&quot;
    fi
}

function padout_file_lines() {
         local filename=&quot;$1&quot;    # Bash-Function-Args
  local tmp1=$(mktemp)
  local tmp2=$(mktemp)
  rm -f &quot;$tmp1&quot; &gt;/dev/null 2&gt;&amp;1
  rm -f &quot;$tmp2&quot; &gt;/dev/null 2&gt;&amp;1

  if [[ -z &quot;$filename&quot; ]]; then
    fecho &quot;Error: Filename not provided.&quot;
    return 1
  fi

  if [[ ! -f &quot;$filename&quot; ]]; then
    fecho &quot;Error: File &#39;$filename&#39; not found.&quot;
    return 1
  fi

  sed &#39;s/[[:space:]]*$//&#39; &quot;$filename&quot;  &gt; &quot;$tmp1&quot;
  max_len=$(wc -L &quot;$tmp1&quot; | awk &#39;{print $1}&#39;)
  padding_length=$((max_len + 0))

  # Iterate through each line of the file and pad it
  rm -f &quot;$tmp2&quot; &gt;/dev/null 2&gt;&amp;1
  while IFS= read -r line; do
    printf &quot;%-${padding_length}s\n&quot; &quot;$line&quot; &gt;&gt; &quot;$tmp2&quot; # Pad to the right
  done &lt; &quot;$tmp1&quot;

  mv &quot;$tmp2&quot; &quot;$filename&quot;

  rm -f &quot;$tmp1&quot; &gt;/dev/null 2&gt;&amp;1
  rm -f &quot;$tmp2&quot; &gt;/dev/null 2&gt;&amp;1
  return 0
}


# Example usage (if you want to run it directly from the script):
# if [[ &quot;$0&quot; == &quot;$BASH_SOURCE&quot; ]]; then
#   if [[ $# -eq 1 ]]; then
#     scan_for_secrets &quot;$1&quot;
#   else
#     echo &quot;Usage: $0 &lt;file&gt;&quot;
#     exit 1
#   fi
# fi

# Function to split a file into N files
function split_file_n() {
         local input_file=&quot;$1&quot;;local num_files=&quot;$2&quot; # Bash-Function-Args
  local prefix=&quot;${3:-split_}&quot; # Default prefix is &quot;split_&quot;

  if [[ -z &quot;$input_file&quot; || -z &quot;$num_files&quot; ]]; then
    echo &quot;Usage: split_file_n &lt;input_file&gt; &lt;number_of_files&gt; [prefix]&quot;
    return 1
  fi

  if [[ ! -f &quot;$input_file&quot; ]]; then
    echo &quot;Error: Input file &#39;$input_file&#39; not found.&quot;
    return 1
  fi

  if ! [[ &quot;$num_files&quot; =~ ^[0-9]+$ ]]; then
      echo &quot;Error: Number of files must be a positive integer.&quot;
      return 1
  fi

  local total_lines=$(wc -l &lt; &quot;$input_file&quot;)
  local lines_per_file=$((total_lines / num_files))
  local remainder=$((total_lines % num_files))

  local start_line=1
  for ((i=1; i&lt;=num_files; i++)); do
    local output_file=&quot;${prefix}${i}&quot;
    local current_lines=$lines_per_file

    if [[ $i -le $remainder ]]; then
      ((current_lines++)) # Distribute remainder lines
    fi

    head -n &quot;$((start_line + current_lines - 1))&quot; &quot;$input_file&quot; | tail -n &quot;$current_lines&quot; &gt; &quot;$output_file&quot;

    ((start_line += current_lines))
  done
}

# Example usage (if you want to test it from the script itself):
# if [[ &quot;$0&quot; == &quot;$BASH_SOURCE&quot; ]]; then
#   if [[ $# -ge 2 ]]; then
#     split_file_n &quot;$1&quot; &quot;$2&quot; &quot;${3:-split_}&quot;
#   else
#     echo &quot;Usage: $0 &lt;input_file&gt; &lt;number_of_files&gt; [prefix]&quot;
#   fi
# fi

function truncate_file_lines() {
         local filename=&quot;$1&quot;;local num_chars=&quot;$2&quot; # Bash-Function-Args

  if [[ -z &quot;$filename&quot; ]]; then
    echo &quot;Truncate Error: Filename not provided.&quot;
    return 1
  fi

  if [[ ! -f &quot;$filename&quot; ]]; then
    echo &quot;Truncate Error: File &#39;$filename&#39; not found.&quot;
    return 1
  fi

  if [[ -z &quot;$num_chars&quot; ]]; then
    echo &quot;Truncate Error: Number of characters not provided.&quot;
    return 1
  fi

  if ! [[ &quot;$num_chars&quot; =~ ^[0-9]+$ ]]; then
    echo &quot;Truncate Error: Number of characters must be a positive integer.&quot;
    return 1
  fi
  if [[ &quot;$num_chars&quot; == &quot;0&quot; ]]; then
    return 0
  fi

  local temp_file=$(mktemp)

  while IFS= read -r line; do
    printf &quot;%.${num_chars}s\n&quot; &quot;$line&quot; &gt;&gt; &quot;$temp_file&quot;
  done &lt; &quot;$filename&quot;

  mv &quot;$temp_file&quot; &quot;$filename&quot;

  return 0
}

function string_before_file_lines() {
         local filename=&quot;$1&quot;;local str=&quot;$2&quot; # Bash-Function-Args

  if [[ -z &quot;$filename&quot; ]]; then
    echo &quot;string_before Error: Filename not provided.&quot;
    return 1
  fi

  if [[ ! -f &quot;$filename&quot; ]]; then
    echo &quot;string_before Error: File &#39;$filename&#39; not found.&quot;
    return 1
  fi

  if [[ -z &quot;$str&quot; ]]; then
    echo &quot;string_before Error: Number of characters not provided.&quot;
    return 1
  fi

  local temp_file=$(mktemp)

  while IFS= read -r line; do
    printf &quot;${str}%s\n&quot; &quot;$line&quot; &gt;&gt; &quot;$temp_file&quot;
  done &lt; &quot;$filename&quot;

  mv &quot;$temp_file&quot; &quot;$filename&quot;

  return 0
}
function string_after_file_lines() {
         local filename=&quot;$1&quot;;local str=&quot;$2&quot; # Bash-Function-Args

  if [[ -z &quot;$filename&quot; ]]; then
    echo &quot;string_before Error: Filename not provided.&quot;
    return 1
  fi

  if [[ ! -f &quot;$filename&quot; ]]; then
    echo &quot;string_before Error: File &#39;$filename&#39; not found.&quot;
    return 1
  fi

  if [[ -z &quot;$str&quot; ]]; then
    echo &quot;string_before Error: Number of characters not provided.&quot;
    return 1
  fi

  local temp_file=$(mktemp)

  while IFS= read -r line; do
    printf &quot;%s${str}\n&quot; &quot;$line&quot; &gt;&gt; &quot;$temp_file&quot;
  done &lt; &quot;$filename&quot;

  mv &quot;$temp_file&quot; &quot;$filename&quot;

  return 0
}

function sort_file() {
         local filename=&quot;$1&quot;; local str=&quot;$2&quot; # Bash-Function-Args

  if [[ -z &quot;$filename&quot; ]]; then
    fecho &quot;Error: Filename not provided.&quot;
    return 1
  fi

  if [[ ! -f &quot;$filename&quot; ]]; then
    fecho &quot;Error: File &#39;$filename&#39; not found.&quot;
    return 1
  fi
  if [[ -z &quot;$str&quot; ]]; then
    fecho &quot;Error: Control word not provided.&quot;
    return 1
  fi

  if [[ &quot;$str&quot; == &quot;&quot; ]]; then
      NOTHING=0
  else
      local tmp1=$(mktemp)
      cat &quot;$filename&quot; | sort &gt; &quot;$tmp1&quot;
      mv &quot;$tmp1&quot; &quot;$filename&quot;
  fi

  return 0
}

function justify_line() {
         local str=&quot;$1&quot;; local num=&quot;$2&quot; # Bash-Function-Args

    local tmp1=$(mktemp)
    echo &quot;$1&quot; | gawk -v num=$2 &#39;
        function justify(szIn,  l,n,i,sz,m,k,A, flag) {
            sz = &quot;&quot;;
            n =  split(szIn,A,&quot; &quot;);
            r = 1
            delim = &quot;&quot;
            flag=0
            for (i=1; i&lt;=n; i++) {
                sz = delim sz A[i] &quot; &quot;;
                delim = &quot;&quot;
                l = l + length(A[i] &quot; &quot;);
                if (l &gt; (num*r)) {
                    r=r+1;
                    sz = sz &quot;\n&quot;
                    flag=1
                    delim = &quot;&quot;
                }
            }
            if (flag == 1) sz = sz &quot;\n&quot;
            return sz;
        }
        {
            print justify($0);
        }&#39; &gt; &quot;$tmp1&quot;

    cat &quot;$tmp1&quot;
    rm -f &quot;$tmp1&quot; &gt;/dev/null 2&gt;&amp;1
}
function justify_file() {
         local filename=&quot;$1&quot;;local num=&quot;$2&quot; # Bash-Function-Args

  if [[ -z &quot;$filename&quot; ]]; then
    echo &quot;Truncate Error: Filename not provided.&quot;
    return 1
  fi

  if [[ ! -f &quot;$filename&quot; ]]; then
    echo &quot;Truncate Error: File &#39;$filename&#39; not found.&quot;
    return 1
  fi

  if [[ -z &quot;$num&quot; ]]; then
    echo &quot;Truncate Error: Number of characters not provided.&quot;
    return 1
  fi

  if ! [[ &quot;$num&quot; =~ ^[0-9]+$ ]]; then
    echo &quot;Truncate Error: Number of characters must be a positive integer.&quot;
    return 1
  fi
  if [[ &quot;$num&quot; == &quot;0&quot; ]]; then
    return 0
  fi

  local temp_file=$(mktemp)

  while IFS= read -r line; do
    justify_line &quot;$line&quot; &quot;$num&quot; &gt;&gt; &quot;$temp_file&quot;
  done &lt; &quot;$filename&quot;

  mv &quot;$temp_file&quot; &quot;$filename&quot;

  return 0
}

function indent_file() {
         local filename=&quot;$1&quot;   # Bash-Function-Args

  if [[ -z &quot;$filename&quot; ]]; then
    fecho &quot;Error: Filename not provided.&quot;
    return 1
  fi

  if [[ ! -f &quot;$filename&quot; ]]; then
    fecho &quot;Error: File &#39;$filename&#39; not found.&quot;
    return 1
  fi

  local temp_file=$(mktemp)

  while IFS= read -r line; do
    echo &quot;    $line&quot; &gt;&gt; &quot;$temp_file&quot;
  done &lt; &quot;$filename&quot;

  mv &quot;$temp_file&quot; &quot;$filename&quot;

  return 0
}
function trim_leading_whitespace_file() {
         local filename=&quot;$1&quot;            # Bash-Function-Args
  local sz=&quot;&quot;

  if [[ -z &quot;$filename&quot; ]]; then
    fecho &quot;Error: Filename not provided.&quot;
    return 1
  fi

  if [[ ! -f &quot;$filename&quot; ]]; then
    fecho &quot;Error: File &#39;$filename&#39; not found.&quot;
    return 1
  fi

  local temp_file=$(mktemp)

  while IFS= read -r line; do
    remove_leading_whitespace &quot;$line&quot; &gt;&gt; &quot;$temp_file&quot;
  done &lt; &quot;$filename&quot;

  mv &quot;$temp_file&quot; &quot;$filename&quot;

  return 0
}
function create_markdown_table4() {
         local input_file=&quot;$1&quot;;local str=&quot;$2&quot;                   # Bash-Function-Args
  local tmp=$(mktemp)
  local LEN=&quot;&quot;
  local STRING=&quot;&quot;

  # Check if the input file exists
  if [[ ! -f &quot;$input_file&quot; ]]; then
    fecho &quot;Error: Input file &#39;$input_file&#39; not found.&quot;
    return 1
  fi

  LEN=`longest_string_length &lt; &quot;$input_file&quot;`
  STRING=`repeat_char &quot;-&quot; &quot;24&quot;`

  rm -f &quot;$tmp&quot; &gt;/dev/null 2&gt;&amp;1
  if [[ &quot;$str&quot; == &quot;MAKELINKS&quot; ]]; then
      cat &quot;$input_file&quot; |sort|uniq|gawk &#39;{n=split($0,A,&quot;/&quot;);print &quot;[&quot; A[n] &quot;](&quot; $0 &quot;)&quot;;}&#39; &gt; $tmp
  else
      cat &quot;$input_file&quot; |sort|uniq &gt; $tmp
  fi

  # Read lines from the file and create table rows
  local line_count=0
  local row=&quot;&quot;
  local first_row=1

  while IFS= read -r line; do
    if [[ $line_count -eq 0 ]]; then
      if [[ $first_row -eq 1 ]]; then
          echo &quot;| $STRING | $STRING | $STRING | $STRING |&quot;
          echo &quot;|----------|----------|----------|----------|&quot;
          first_row=0
      fi
    fi

    row+=&quot;| $line &quot;

    line_count=$((line_count + 1))

    if [[ $line_count -eq 4 ]]; then
      echo &quot;$row|&quot;
      row=&quot;&quot;
      line_count=0
    fi
  done &lt; &quot;$tmp&quot;

  # Handle remaining lines if the total line count is not a multiple of 5
  if [[ $line_count -gt 0 ]]; then
    for ((i = line_count; i &lt; 5; i++)); do
        row+=&quot;|  &quot;
    done
    echo &quot;$row|&quot;
  fi
}

#######################################################################################################
Processing file: bashrc.shared
 _               _                    _                        _ 
| |__   __ _ ___| |__  _ __ ___   ___| |__   __ _ _ __ ___  __| |
| &#39;_ \ / _` / __| &#39;_ \| &#39;__/ __| / __| &#39;_ \ / _` | &#39;__/ _ \/ _` |
| |_) | (_| \__ \ | | | | | (__ _\__ \ | | | (_| | | |  __/ (_| |
|_.__/ \__,_|___/_| |_|_|  \___(_)___/_| |_|\__,_|_|  \___|\__,_|
                                                                 
# *********************************************************DATEOMATIC: Mon Mar 24 11:16:15 EDT 2025
# *********************************************************HASHOMATIC: 54a9bc07a629dfb2173395753b1dd926
# don&#39;t put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don&#39;t overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

#export PS1=&#39;$(collapse_hostname)$(collapse_pwd)$(git_origin)$(git_branch)\n&gt;&gt; &#39;
#export PS1=&#39;$(git_origin)$(git_branch)\n$(collapse_hostname)$(collapse_pwd)&gt;&gt; &#39;
export PS1=&#39;$(collapse_hostname) $(collapse_pwd) ($(git_toplevel):$(git_branch):$(git_originsync))&gt;&gt; &#39;

alias ls=&#39;ls -t&#39;
alias scm=&#39;cd /etc/scm&#39;
alias center=&#39;cd /etc/center&#39;
alias cgi=&#39;cd /var/www/cgi&#39;
alias grep=&#39;grep --color=never&#39;
alias qgrep=&#39;grep -nHP --color=none&#39;
alias qg=&#39;grep -nHP --color=none&#39;
alias fullpath=&#39;find . -type f 2&gt;/dev/null | sed &quot;s#^.#$(pwd)#&quot;&#39;
alias fullpathd=&#39;find . -type d 2&gt;/dev/null | sed &quot;s#^.#$(pwd)#&quot;&#39;

export FC1=&quot;~/1.fc&quot;
export FC2=&quot;~/2.fc&quot;
export FC3=&quot;~/applog&quot;
export FC4=&quot;~/vimlog&quot;
export FC5=&quot;./notes&quot;
export VIMSESSIONDEFAULT=~/.vimsessiondefault
# Just the name part here
export VIMSESSION=.vim
export VIMWINDOW=.vim
export VIMSPLIT=.vim
export VIMWINDOWS=.vimwindows
export VIMLAYOUT=.vimlayout
export VIMNOSPLITS=.vimnosplits
export VIMSPLITCMDS=&quot;vsplit | split | vertical resize 53&quot;
export VIMTEMPLATES=&quot;~/TPLS/&quot;

#######################################################################################################
Processing file: bashtop
 _               _     _              
| |__   __ _ ___| |__ | |_ ___  _ __  
| &#39;_ \ / _` / __| &#39;_ \| __/ _ \| &#39;_ \ 
| |_) | (_| \__ \ | | | || (_) | |_) |
|_.__/ \__,_|___/_| |_|\__\___/| .__/ 
                               |_|    
#!/usr/bin/bash
# *********************************************************DATEOMATIC: Wed Feb 26 00:01:17 EST 2025
# *********************************************************HASHOMATIC: 77817de3816b3a115eaec6bb1cc34eea
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap &#39;exit 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot; &quot;$Tmp0&quot; &quot;$Tmp1&quot; &quot;$Tmp2&quot; &quot;$Tmp3&quot;&#39; EXIT
rm -f &quot;$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3&quot;  &gt;/dev/null 2&gt;&amp;1;

UPDATE=&quot;NO&quot;
while getopts &quot;cur:&quot; arg
do
    case $arg in
        c) clear
           ;;
        u) UPDATE=&quot;YES&quot;
           exit 0
           ;;
        r) OA=&quot;$OPTARG&quot;
           exit 0
           ;;
    esac
done
shift $(($OPTIND - 1))

# Check if the number of arguments is correct
if [ $# -ne 2 ]; theni
  echo &quot;Usage: $0 &lt;arg1&gt; &lt;arg2&gt;&quot;
  echo &quot;Error: Incorrect number of arguments.&quot;
  exit 1  # Exit with an error code
fi
arg1=&quot;$1&quot;
arg2=&quot;$2&quot;

if [ &quot;$UPDATE&quot; == &quot;YES&quot; ]; then                                                                                               
    RETVAL=&quot;YES&quot;                                                                                                             
else                                                                                                                         
    RETVAL=&quot;NO&quot;                                                                                                              
fi                                                                                                                           

full_filename=&quot;$1&quot;
filename=$(basename &quot;$full_filename&quot;)
directory=$(dirname &quot;$full_filename&quot;)
extension=&quot;${filename##*.}&quot; # Remove everything up to the last dot
if [ &quot;$extension&quot; == &quot;$filename&quot; ]; then # No extension found
  extension=&quot;&quot;
fi
filename_no_ext=&quot;${filename%.*}&quot; # Remove everything after the last dot
file_size=$(stat -c %s &quot;$full_filename&quot;)
file_permissions=$(stat -c %a &quot;$full_filename&quot;)
file_owner=$(stat -c %U &quot;$full_filename&quot;)
last_modified=$(stat -c %y &quot;$full_filename&quot;)
last_access=$(stat -c %x &quot;$full_filename&quot;)
file_type=$(file -b --mime-type &quot;$full_filename&quot;)


#######################################################################################################
Processing file: colomatic
           _                       _   _      
  ___ ___ | | ___  _ __ ___   __ _| |_(_) ___ 
 / __/ _ \| |/ _ \| &#39;_ ` _ \ / _` | __| |/ __|
| (_| (_) | | (_) | | | | | | (_| | |_| | (__ 
 \___\___/|_|\___/|_| |_| |_|\__,_|\__|_|\___|
                                              
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp1=/tmp/$$_$$
Tmp2=/tmp/$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$
trap &#39;exit 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot; &quot;$Tmp1&quot; &quot;$Tmp2&quot; &quot;$Tmp3&quot;&#39; EXIT
rm -f &quot;$Tmp&quot;  &gt;/dev/null 2&gt;&amp;1
rm -f &quot;$Tmp1&quot;  &gt;/dev/null 2&gt;&amp;1
rm -f &quot;$Tmp2&quot;  &gt;/dev/null 2&gt;&amp;1
rm -f &quot;$Tmp3&quot;  &gt;/dev/null 2&gt;&amp;1
#================================================================
# paste -d&#39; &#39; file1 file2 &gt; output_file

source ~/bash.library

function implColomatic() {
    local tmp1=&quot;/tmp/temp_$$&quot;
    local tmp2=&quot;/tmp/temp_$$_$$&quot;
    local tmp3=&quot;/tmp/temp_$$_$$_$$&quot;

    # Get the filename from the command-line argument
    local filename1=&quot;$1&quot;
    local filename2=&quot;$2&quot;

    # Check if a filename is are provided
    if [ -z &quot;$filename1&quot; ]; then
      echo &quot;Usage: &lt;filename&gt; &lt;filename&gt;&quot;
      exit 1
    fi
    if [ -z &quot;$filename2&quot; ]; then
      echo &quot;Usage: &lt;filename&gt; &lt;filename&gt;&quot;
      exit 1
    fi

    # Check if the files exist
    if [ ! -f &quot;$filename1&quot; ]; then
      echo &quot;Error: File &#39;$filename&#39; not found.&quot;
      exit 1
    fi
    if [ ! -f &quot;$filename2&quot; ]; then
      echo &quot;Error: File &#39;$filename&#39; not found.&quot;
      exit 1
    fi
    cat &quot;$filename1&quot; &gt; $tmp1
    cat &quot;$filename2&quot; &gt; $tmp2

    if [ &quot;$DELIM&quot; == &quot;,&quot; ]; then                                                                                               
        paste &quot;$tmp1&quot; &quot;$tmp2&quot; | sed &#39;s/\t/,/g&#39;
    else
        if [ &quot;$BAR&quot; == &quot;|&quot; ]; then                                                                                               
            paste &quot;$tmp1&quot; &quot;$tmp2&quot; | sed &#39;s/\t//g&#39;
        else
            paste &quot;$tmp1&quot; &quot;$tmp2&quot; | sed &#39;s/\t/ /g&#39;
        fi
    fi
    rm -f &quot;$tmp1&quot; &gt;/dev/null 2&gt;&amp;1
    rm -f &quot;$tmp2&quot; &gt;/dev/null 2&gt;&amp;1
    rm -f &quot;$tmp3&quot; &gt;/dev/null 2&gt;&amp;1
}

DELIM=&quot; &quot;
BAR=&quot; &quot;
SORT=&quot;&quot;
W=0
while getopts &quot;sbn:2:3:4:5:c&quot; arg
do
    case $arg in
        s) SORT=&quot;YES&quot;
           ;;
        b) BAR=&quot;|&quot;
           ;;
        n) W=$OPTARG
           ;;
        2) DELIM=&quot;&quot;
           rm -f &quot;split_0&quot; &quot;split_1&quot; &quot;split_2&quot; &quot;split_3&quot; &quot;split_4&quot; &quot;split_5&quot; &gt;/dev/null 2&gt;&amp;1
           cp &quot;$OPTARG&quot; &quot;split_0&quot;
           trim_leading_whitespace_file &quot;split_0&quot;
           justify_file &quot;split_0&quot; &quot;44&quot;
           sort_file &quot;split_0&quot; &quot;$SORT&quot;
#           indentomatic -f split_0 
           split_file_n &quot;split_0&quot; &quot;2&quot; &quot;split_&quot;
           truncate_file_lines &quot;split_1&quot; $W 
               padout_file_lines &quot;split_1&quot;
               string_before_file_lines &quot;split_1&quot; &quot;$BAR&quot;
           truncate_file_lines &quot;split_2&quot; $W 
               padout_file_lines &quot;split_2&quot;
               string_before_file_lines &quot;split_2&quot; &quot;$BAR&quot;
               string_after_file_lines  &quot;split_2&quot; &quot;$BAR&quot;

           implColomatic &quot;split_1&quot;    &quot;split_2&quot;    &quot;$DELIM&quot;
           rm -f &quot;split_0&quot; &quot;split_1&quot; &quot;split_2&quot; &quot;split_3&quot; &quot;split_4&quot; &quot;split_5&quot; &gt;/dev/null 2&gt;&amp;1
           exit 0
           ;;
        3) DELIM=&quot; &quot;
           rm -f &quot;split_0&quot; &quot;split_1&quot; &quot;split_2&quot; &quot;split_3&quot; &quot;split_4&quot; &quot;split_5&quot; &gt;/dev/null 2&gt;&amp;1
           cp &quot;$OPTARG&quot; &quot;split_0&quot;
           sort_file &quot;split_0&quot; &quot;$SORT&quot;
           split_file_n &quot;split_0&quot; &quot;3&quot; &quot;split_&quot;
           truncate_file_lines &quot;split_1&quot; $W 
               padout_file_lines &quot;split_1&quot;
                   string_before_file_lines &quot;split_1&quot; &quot;$BAR&quot;
           truncate_file_lines &quot;split_2&quot; $W 
               padout_file_lines &quot;split_2&quot;
                   string_before_file_lines &quot;split_2&quot; &quot;$BAR&quot;
           truncate_file_lines &quot;split_3&quot; $W 
               padout_file_lines &quot;split_3&quot;
                   string_before_file_lines &quot;split_3&quot; &quot;$BAR&quot;
                   string_after_file_lines  &quot;split_3&quot; &quot;$BAR&quot;

           implColomatic &quot;split_1&quot;    &quot;split_2&quot;    &quot;$DELIM&quot;    &gt; &quot;$Tmp1&quot;
           implColomatic &quot;$Tmp1&quot;      &quot;split_3&quot;    &quot;$DELIM&quot;
           rm -f &quot;split_0&quot; &quot;split_1&quot; &quot;split_2&quot; &quot;split_3&quot; &quot;split_4&quot; &quot;split_5&quot; &gt;/dev/null 2&gt;&amp;1
           exit 0
           ;;
        4) DELIM=&quot; &quot;
           rm -f &quot;split_0&quot; &quot;split_1&quot; &quot;split_2&quot; &quot;split_3&quot; &quot;split_4&quot; &quot;split_5&quot; &gt;/dev/null 2&gt;&amp;1
           cp &quot;$OPTARG&quot; &quot;split_0&quot;
           sort_file &quot;split_0&quot; &quot;$SORT&quot;
           split_file_n &quot;split_0&quot; &quot;4&quot; &quot;split_&quot;
           truncate_file_lines &quot;split_1&quot; $W 
               padout_file_lines &quot;split_1&quot;
                   string_before_file_lines &quot;split_1&quot; &quot;$BAR&quot;
           truncate_file_lines &quot;split_2&quot; $W 
               padout_file_lines &quot;split_2&quot;
                   string_before_file_lines &quot;split_2&quot; &quot;$BAR&quot;
           truncate_file_lines &quot;split_3&quot; $W 
               padout_file_lines &quot;split_3&quot;
                   string_before_file_lines &quot;split_3&quot; &quot;$BAR&quot;
           truncate_file_lines &quot;split_4&quot; $W 
               padout_file_lines &quot;split_4&quot;
                   string_before_file_lines &quot;split_4&quot; &quot;$BAR&quot;
                   string_after_file_lines  &quot;split_4&quot; &quot;$BAR&quot;
           implColomatic &quot;split_1&quot;    &quot;split_2&quot;    &quot;$DELIM&quot;    &gt; &quot;$Tmp1&quot;
           implColomatic &quot;$Tmp1&quot;      &quot;split_3&quot;    &quot;$DELIM&quot;    &gt; &quot;$Tmp2&quot;
           implColomatic &quot;$Tmp2&quot;      &quot;split_4&quot;    &quot;$DELIM&quot;
           rm -f &quot;split_0&quot; &quot;split_1&quot; &quot;split_2&quot; &quot;split_3&quot; &quot;split_4&quot; &quot;split_5&quot; &gt;/dev/null 2&gt;&amp;1
           exit 0
           ;;
        5) DELIM=&quot; &quot;
           rm -f &quot;split_0&quot; &quot;split_1&quot; &quot;split_2&quot; &quot;split_3&quot; &quot;split_4&quot; &quot;split_5&quot; &gt;/dev/null 2&gt;&amp;1
           cp &quot;$OPTARG&quot; &quot;split_0&quot;
           sort_file &quot;split_0&quot; &quot;$SORT&quot;
           split_file_n &quot;split_0&quot; &quot;5&quot; &quot;split_&quot;
           truncate_file_lines &quot;split_1&quot; $W 
               padout_file_lines &quot;split_1&quot;
                   string_before_file_lines &quot;split_1&quot; &quot;$BAR&quot;
           truncate_file_lines &quot;split_2&quot; $W 
               padout_file_lines &quot;split_2&quot;
                   string_before_file_lines &quot;split_2&quot; &quot;$BAR&quot;
           truncate_file_lines &quot;split_3&quot; $W 
               padout_file_lines &quot;split_3&quot;
                   string_before_file_lines &quot;split_3&quot; &quot;$BAR&quot;
           truncate_file_lines &quot;split_4&quot; $W 
               padout_file_lines &quot;split_4&quot;
                   string_before_file_lines &quot;split_4&quot; &quot;$BAR&quot;
           truncate_file_lines &quot;split_5&quot; $W 
               padout_file_lines &quot;split_5&quot;
                   string_before_file_lines &quot;split_5&quot; &quot;$BAR&quot;
                   string_after_file_lines  &quot;split_5&quot; &quot;$BAR&quot;
           implColomatic &quot;split_1&quot;    &quot;split_2&quot;    &quot;$DELIM&quot;    &gt; &quot;$Tmp1&quot;
           implColomatic &quot;$Tmp1&quot;      &quot;split_3&quot;    &quot;$DELIM&quot;    &gt; &quot;$Tmp2&quot;
           implColomatic &quot;$Tmp2&quot;      &quot;split_4&quot;    &quot;$DELIM&quot;    &gt; &quot;$Tmp3&quot;
           implColomatic &quot;$Tmp3&quot;      &quot;split_5&quot;    &quot;$DELIM&quot;
           rm -f &quot;split_0&quot; &quot;split_1&quot; &quot;split_2&quot; &quot;split_3&quot; &quot;split_4&quot; &quot;split_5&quot; &gt;/dev/null 2&gt;&amp;1
           exit 0
           ;;
        c) DELIM=&quot;,&quot;
           ;;
    esac
done
shift $(($OPTIND - 1))

if [ $# -gt 1 ]; then
    implColomatic &quot;$1&quot; &quot;$2&quot; &quot;$DELIM&quot; &gt; &quot;$Tmp2&quot;
    shift
    shift
    for item in &quot;$@&quot;; do
        implColomatic &quot;$Tmp2&quot; &quot;$item&quot; &quot;$DELIM&quot; &gt; &quot;$Tmp1&quot;
        cp &quot;$Tmp1&quot; &quot;$Tmp2&quot;
    done
    cat &quot;$Tmp2&quot;
fi

#######################################################################################################
Processing file: deploy
     _            _             
  __| | ___ _ __ | | ___  _   _ 
 / _` |/ _ \ &#39;_ \| |/ _ \| | | |
| (_| |  __/ |_) | | (_) | |_| |
 \__,_|\___| .__/|_|\___/ \__, |
           |_|            |___/ 

cp ./.bashrc              ~
cp ./bashrc.shared        ~
cp ./bash.library         ~
cp ./getme                ~

#######################################################################################################
Processing file: gDiff
       ____  _  __  __ 
  __ _|  _ \(_)/ _|/ _|
 / _` | | | | | |_| |_ 
| (_| | |_| | |  _|  _|
 \__, |____/|_|_| |_|  
 |___/                 
#!/usr/bin/bash
# *********************************************************DATEOMATIC: Wed Feb 26 00:01:17 EST 2025
# *********************************************************HASHOMATIC: 77817de3816b3a115eaec6bb1cc34eea
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap &#39;ex:it 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot; &quot;$Tmp0&quot; &quot;$Tmp1&quot; &quot;$Tmp2&quot; &quot;$Tmp3&quot;&#39; EXIT
rm -f &quot;$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3&quot;  &gt;/dev/null 2&gt;&amp;1;

UPDATE=&quot;NO&quot;
while getopts &quot;ur:&quot; arg
do
    case $arg in
        u) UPDATE=&quot;YES&quot;
           exit 0
           ;;
        r) UA=&quot;$OPTARG&quot;
           exit 0
           ;;
    esac
done
shift $(($OPTIND - 1))

clear
git fetch origin        &gt; $Tmp
git diff origin/master &gt;&gt; $Tmp
cat $Tmp

#######################################################################################################
Processing file: gHardSync
       _   _               _ ____                   
  __ _| | | | __ _ _ __ __| / ___| _   _ _ __   ___ 
 / _` | |_| |/ _` | &#39;__/ _` \___ \| | | | &#39;_ \ / __|
| (_| |  _  | (_| | | | (_| |___) | |_| | | | | (__ 
 \__, |_| |_|\__,_|_|  \__,_|____/ \__, |_| |_|\___|
 |___/                             |___/            
git fetch origin
git reset --hard origin/master
git clean -fd

#######################################################################################################
Processing file: gLocal
       _                    _ 
  __ _| |    ___   ___ __ _| |
 / _` | |   / _ \ / __/ _` | |
| (_| | |__| (_) | (_| (_| | |
 \__, |_____\___/ \___\__,_|_|
 |___/                        
git add &quot;$1&quot;
git commit -m &quot;Update&quot;

#######################################################################################################
Processing file: gStatus
       ____  _        _             
  __ _/ ___|| |_ __ _| |_ _   _ ___ 
 / _` \___ \| __/ _` | __| | | / __|
| (_| |___) | || (_| | |_| |_| \__ \
 \__, |____/ \__\__,_|\__|\__,_|___/
 |___/                              
#!/usr/bin/bash
# *********************************************************DATEOMATIC: Wed Feb 26 00:01:17 EST 2025
# *********************************************************HASHOMATIC: 77817de3816b3a115eaec6bb1cc34eea
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap &#39;exit 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot; &quot;$Tmp0&quot; &quot;$Tmp1&quot; &quot;$Tmp2&quot; &quot;$Tmp3&quot;&#39; EXIT
rm -f &quot;$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3&quot;  &gt;/dev/null 2&gt;&amp;1;

UPDATE=&quot;NO&quot;
while getopts &quot;c&quot; arg
do
    case $arg in
        c) clear
           ;;
    esac
done
shift $(($OPTIND - 1))

rm -f zed zedd qed qedd  fed fedd
echo &quot;&quot;           &gt; $Tmp
echo &quot;&quot;          &gt;&gt; $Tmp

git rev-parse --show-toplevel 2&gt; /dev/null | sed -e &quot;s,^$HOME,~,&quot;  &gt;&gt; $Tmp
git branch 2&gt; /dev/null | sed &#39;s/^..//&#39;                            &gt;&gt; $Tmp
echo &quot;&quot;          &gt;&gt; $Tmp
echo &quot;&quot;          &gt;&gt; $Tmp
git remote -v    &gt;&gt; $Tmp
echo &quot;&quot;          &gt;&gt; $Tmp
echo &quot;&quot;          &gt;&gt; $Tmp
git status       &gt;&gt; $Tmp
echo &quot;&quot;          &gt;&gt; $Tmp
echo &quot;&quot;          &gt;&gt; $Tmp
cat $Tmp
git rev-parse --show-toplevel 2&gt; /dev/null | sed -e &quot;s,^$HOME,~,&quot;  &gt; $Tmp
git branch 2&gt; /dev/null | sed &#39;s/^..//&#39;  &gt;&gt; $Tmp
git config --get remote.origin.url 2&gt; /dev/null  &gt;&gt; $Tmp

#######################################################################################################
Processing file: gUpdate
       _   _           _       _       
  __ _| | | |_ __   __| | __ _| |_ ___ 
 / _` | | | | &#39;_ \ / _` |/ _` | __/ _ \
| (_| | |_| | |_) | (_| | (_| | ||  __/
 \__, |\___/| .__/ \__,_|\__,_|\__\___|
 |___/      |_|                        
git add &quot;$1&quot;
git commit -m &quot;Update&quot;
git push origin master
git status

#######################################################################################################
Processing file: gUpdateFromOrigin
       _   _           _       _       _____                     ___       _ 
  __ _| | | |_ __   __| | __ _| |_ ___|  ___| __ ___  _ __ ___  / _ \ _ __(_)
 / _` | | | | &#39;_ \ / _` |/ _` | __/ _ \ |_ | &#39;__/ _ \| &#39;_ ` _ \| | | | &#39;__| |
| (_| | |_| | |_) | (_| | (_| | ||  __/  _|| | | (_) | | | | | | |_| | |  | |
 \__, |\___/| .__/ \__,_|\__,_|\__\___|_|  |_|  \___/|_| |_| |_|\___/|_|  |_|
 |___/      |_|                                                              
       _       
  __ _(_)_ __  
 / _` | | &#39;_ \ 
| (_| | | | | |
 \__, |_|_| |_|
 |___/         
#!/usr/bin/bash
# *********************************************************DATEOMATIC: Wed Feb 26 00:01:17 EST 2025
# *********************************************************HASHOMATIC: 77817de3816b3a115eaec6bb1cc34eea
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap &#39;exit 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot; &quot;$Tmp0&quot; &quot;$Tmp1&quot; &quot;$Tmp2&quot; &quot;$Tmp3&quot;&#39; EXIT
rm -f &quot;$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3&quot;  &gt;/dev/null 2&gt;&amp;1;


git pull

#######################################################################################################
Processing file: gawk.library
                      _      _ _ _                          
  __ _  __ ___      _| | __ | (_) |__  _ __ __ _ _ __ _   _ 
 / _` |/ _` \ \ /\ / / |/ / | | | &#39;_ \| &#39;__/ _` | &#39;__| | | |
| (_| | (_| |\ V  V /|   &lt; _| | | |_) | | | (_| | |  | |_| |
 \__, |\__,_| \_/\_/ |_|\_(_)_|_|_.__/|_|  \__,_|_|   \__, |
 |___/                                                |___/ 
# *********************************************************DATEOMATIC: Mon Mar 24 11:16:15 EDT 2025
# *********************************************************HASHOMATIC: b2301410a287f687ccf05e3fded983df

# Trims leading and trailing whitespace from a string.
function trim(str,  trimmed) {
  sub(/^[ \t\r\n]+/, &quot;&quot;, str);
  sub(/[ \t\r\n]+$/, &quot;&quot;, str);
  return str;
}

# Splits a string into an array based on a delimiter, handles empty fields
function split_preserve_empty(str, arr, delim,  i, field) {
  delete arr;
  i = 1;
  while (match(str, &quot;([^&quot; delim &quot;]*)&quot; delim &quot;?&quot;, field)) {
    arr[i++] = field[1];
    str = substr(str, RLENGTH + 1);
  }
  if (length(str) &gt; 0) {
    arr[i] = str;
  }
  return i;
}

# Checks if a string starts with a given prefix.
function starts_with(str, prefix) {
  return substr(str, 1, length(prefix)) == prefix;
}

# Checks if a string ends with a given suffix.
function ends_with(str, suffix) {
  return substr(str, length(str) - length(suffix) + 1) == suffix;
}

# Replaces all occurrences of a substring with another string.
function replace_all(str, from, to,  result) {
  result = str;
  while (sub(from, to, result)) {}
  return result;
}

#Checks if a string contains a given substring
function contains(str, sub) {
    return index(str, sub) != 0;
}

# --- Array Manipulation ---

# Checks if an array contains a given value.
function array_contains(arr, val,  i) {
  for (i in arr) {
    if (arr[i] == val) {
      return 1;
    }
  }
  return 0;
}

# Joins array elements into a string with a delimiter.
function array_join(arr, delim,  i, result) {
  result = &quot;&quot;;
  for (i in arr) {
    result = result (result == &quot;&quot; ? &quot;&quot; : delim) arr[i];
  }
  return result;
}

#Filters an array based on a given condition (function).
function array_filter(arr, filter_func,  i, new_arr, index) {
    delete new_arr;
    index = 1;
    for (i in arr){
        if(filter_func(arr[i])){
            new_arr[index++] = arr[i];
        }
    }
    return index -1; #Return the size of the new array.
}

#Maps an array to a new array using a function.
function array_map(arr, map_func,  i, new_arr, index){
    delete new_arr;
    index = 1;
    for(i in arr){
        new_arr[index++] = map_func(arr[i]);
    }
    return index -1;
}

# --- Data Processing ---

# Calculates the sum of values in an array.
function array_sum(arr,  i, sum) {
  sum = 0;
  for (i in arr) {
    sum += arr[i];
  }
  return sum;
}

# Calculates the average of values in an array.
function array_average(arr,  sum, count) {
  sum = array_sum(arr);
  count = length(arr);
  if (count == 0) {
    return 0;
  }
  return sum / count;
}

#Parses CSV data into a 2D array.
function parse_csv(data, arr, delimiter,  lines, i, fields, j) {
    lines = split(data, lines, &quot;\n&quot;);
    for (i = 1; i &lt;= lines; i++) {
        split_preserve_empty(lines[i], fields, delimiter);
        for (j = 1; j &lt;= length(fields); j++) {
            arr[i, j] = fields[j];
        }
    }
    return lines;
}

# --- List Operations (Arrays as Lists) ---

# Append an element to the end of a list (array).
function list_append(arr, val,  len) {
  len = length(arr) + 1;
  arr[len] = val;
  return len;
}

# Prepend an element to the beginning of a list (array).
function list_prepend(arr, val,  i, temp_arr, len) {
    len = length(arr);
    for(i = len; i &gt;= 1; i--){
        temp_arr[i+1] = arr[i];
    }
    arr[1] = val;
    for(i = 2; i &lt;= len+1; i++){
        arr[i] = temp_arr[i];
    }
    return len +1;
}

# Insert an element at a specific index in a list (array).
function list_insert(arr, index, val,  i, temp_arr, len) {
  len = length(arr);
  if (index &lt; 1 || index &gt; len + 1) {
    return len; # Invalid index, return original length.
  }

  for (i = len; i &gt;= index; i--) {
    temp_arr[i + 1] = arr[i];
  }
  arr[index] = val;
  for (i = index + 1; i &lt;= len + 1; i++) {
    arr[i] = temp_arr[i];
  }
  return len + 1;
}

# Remove an element at a specific index in a list (array).
function list_remove_at(arr, index,  i, len) {
  len = length(arr);
  if (index &lt; 1 || index &gt; len) {
    return len; # Invalid index, return original length.
  }

  for (i = index; i &lt; len; i++) {
    arr[i] = arr[i + 1];
  }
  delete arr[len];
  return len - 1;
}

# Remove the first occurrence of a value from a list (array).
function list_remove_value(arr, val,  i, len) {
  len = length(arr);
  for (i = 1; i &lt;= len; i++) {
    if (arr[i] == val) {
      list_remove_at(arr, i);
      return len - 1;
    }
  }
  return len; # Value not found, return original length.
}

# Get the element at a specific index in a list (array).
function list_get(arr, index,  len) {
  len = length(arr);
  if (index &lt; 1 || index &gt; len) {
    return &quot;&quot;; # Invalid index, return empty string.
  }
  return arr[index];
}

# Get the index of the first occurrence of a value in a list (array).
function list_index_of(arr, val,  i, len) {
  len = length(arr);
  for (i = 1; i &lt;= len; i++) {
    if (arr[i] == val) {
      return i;
    }
  }
  return -1; # Value not found, return -1.
}

# Get the last index of a value in a list (array).
function list_last_index_of(arr, val, i, len, last_index){
    len = length(arr);
    last_index = -1;
    for(i = 1; i &lt;= len; i++){
        if(arr[i] == val){
            last_index = i;
        }
    }
    return last_index;
}

# Reverse a list (array).
function list_reverse(arr,  i, len, temp_arr) {
  len = length(arr);
  for (i = 1; i &lt;= len; i++) {
    temp_arr[i] = arr[i];
  }
  for (i = 1; i &lt;= len; i++) {
    arr[i] = temp_arr[len - i + 1];
  }
  return len;
}

# Slice a list (array) from start_index to end_index (inclusive).
function list_slice(arr, start_index, end_index,  i, len, new_arr, new_index) {
  len = length(arr);
  if (start_index &lt; 1) {
    start_index = 1;
  }
  if (end_index &gt; len) {
    end_index = len;
  }
  if (start_index &gt; end_index) {
    return 0; # Empty slice, return 0.
  }

  delete new_arr;
  new_index = 1;
  for (i = start_index; i &lt;= end_index; i++) {
    new_arr[new_index++] = arr[i];
  }
  return new_index - 1;
}

# Concatenate two lists (arrays).
function list_concat(arr1, arr2,  i, len1, len2, new_arr, new_index) {
  len1 = length(arr1);
  len2 = length(arr2);
  delete new_arr;
  new_index = 1;
  for (i = 1; i &lt;= len1; i++) {
    new_arr[new_index++] = arr1[i];
  }
  for (i = 1; i &lt;= len2; i++) {
    new_arr[new_index++] = arr2[i];
  }
  return new_index - 1;
}

# --- Example Usage (Illustrative) ---
BEGIN {
  # String manipulation examples
  str = &quot;   hello world   &quot;;
  print &quot;[&quot; trim(str) &quot;]&quot;;

  text = &quot;apple,banana,,orange&quot;;
  count = split_preserve_empty(text, fruits, &quot;,&quot;);
  for (i = 1; i &lt;= count; i++) {
    print &quot;Fruit &quot; i &quot;: [&quot; fruits[i] &quot;]&quot;;
  }

  print starts_with(&quot;awk is fun&quot;, &quot;awk&quot;);
  print ends_with(&quot;awk is fun&quot;, &quot;fun&quot;);
  print replace_all(&quot;awk is fun&quot;, &quot;fun&quot;, &quot;powerful&quot;);
  print contains(&quot;awk is fun&quot;, &quot;is&quot;);

  # Array manipulation examples
  numbers[1] = 10; numbers[2] = 20; numbers[3] = 30;
  print array_contains(numbers, 20);
  print array_join(numbers, &quot;, &quot;);
  print array_sum(numbers);
  print array_average(numbers);

  # CSV parsing example
  csv_data = &quot;name,age,city\nJohn,30,New York\nJane,25,London&quot;;
  rows = parse_csv(csv_data, csv_array, &quot;,&quot;);
  for (i = 1; i &lt;= rows; i++) {
    print csv_array[i, 1] &quot;, &quot; csv_array[i, 2] &quot;, &quot; csv_array[i, 3];
  }

  # Array filter and map examples
  function is_even(num){return num % 2 == 0;}
  even_count = array_filter(numbers, &quot;is_even&quot;, even_numbers);
  print &quot;Even numbers: &quot; array_join(even_numbers, &quot;, &quot;);

  function double(num){return num * 2;}
  doubled_count = array_map(numbers, &quot;double&quot;, doubled_numbers);
  print &quot;Doubled numbers: &quot; array_join(doubled_numbers, &quot;, &quot;);

  # List operation examples
  list[1] = 10; list[2] = 20; list[3] = 30;

  list_append(list, 40);
  list_prepend(list, 5);
  list_insert(list, 3, 25);
  list_remove_at(list, 4);
  list_remove_value(list, 20);

  print &quot;List: &quot; array_join(list, &quot;, &quot;);
  print &quot;Get index 2: &quot; list_get(list, 2);
  print &quot;Index of 30: &quot; list_index_of(list, 30);
  print &quot;Last Index of 10: &quot; list_last_index_of(list,10);
  list_reverse(list);
  print &quot;Reversed list: &quot; array_join(list, &quot;, &quot;);

  list2[1] = 100; list2[2] = 200;
  list_concat(list, list2, combined_list);
  print &quot;Combined List: &quot; array_join(combined_list, &quot;, &quot;);

  list_slice(combined_list, 2, 4, sliced_list);
  print &quot;Sliced List: &quot; array_join(sliced_list, &quot;, &quot;);
}

#######################################################################################################
Processing file: get.raw
            _                        
  __ _  ___| |_   _ __ __ ___      __
 / _` |/ _ \ __| | &#39;__/ _` \ \ /\ / /
| (_| |  __/ |_ _| | | (_| |\ V  V / 
 \__, |\___|\__(_)_|  \__,_| \_/\_/  
 |___/                               
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.bashrc
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.gitignore
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.vimrc
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/README.md
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.functions
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.justhelp
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.library
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashrc.shared
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashtop
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/colomatic
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/deploy
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gDiff
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gHardSync
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gLocal
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gStatus
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdate
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdateFromOrigin
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gawk.library
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/get.raw
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/getme
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/indentomatic
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/justomatic
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/listing
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/make
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/newbashscript
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/notes
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/other
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/padomatic
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/rmLeadingWhiteSpace
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/setgit
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/template.html
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/update
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/vim.txt

#######################################################################################################
Processing file: getme
            _                  
  __ _  ___| |_ _ __ ___   ___ 
 / _` |/ _ \ __| &#39;_ ` _ \ / _ \
| (_| |  __/ |_| | | | | |  __/
 \__, |\___|\__|_| |_| |_|\___|
 |___/                         
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.bashrc
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.functions
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.justhelp
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.library
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashrc.shared
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashtop
wget https://raw.githubusercontent.com/archernar/basics/refs/heads/master/newbashscript

#######################################################################################################
Processing file: indentomatic
 _           _            _                        _   _      
(_)_ __   __| | ___ _ __ | |_ ___  _ __ ___   __ _| |_(_) ___ 
| | &#39;_ \ / _` |/ _ \ &#39;_ \| __/ _ \| &#39;_ ` _ \ / _` | __| |/ __|
| | | | | (_| |  __/ | | | || (_) | | | | | | (_| | |_| | (__ 
|_|_| |_|\__,_|\___|_| |_|\__\___/|_| |_| |_|\__,_|\__|_|\___|
                                                              
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp1=/tmp/$$_$$
Tmp2=/tmp/$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$
trap &#39;exit 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot; &quot;$Tmp1&quot; &quot;$Tmp2&quot; &quot;$Tmp3&quot;&#39; EXIT
rm -f &quot;$Tmp&quot;  &gt;/dev/null 2&gt;&amp;1
rm -f &quot;$Tmp1&quot;  &gt;/dev/null 2&gt;&amp;1
rm -f &quot;$Tmp2&quot;  &gt;/dev/null 2&gt;&amp;1
rm -f &quot;$Tmp3&quot;  &gt;/dev/null 2&gt;&amp;1
#================================================================

source ~/bash.library

filename=&quot;$1&quot;

# Check if a filename is are provided
if [ -z &quot;$filename&quot; ]; then
  fecho &quot;Usage: &lt;filename&gt; &lt;filename&gt;&quot;
  exit 1
fi

# Check if the files exist
if [ ! -f &quot;$filename&quot; ]; then
  fecho &quot;Error: File &#39;$filename&#39; not found.&quot;
  exit 1
fi

indent_file &quot;$filename&quot; 


#######################################################################################################
Processing file: input.txt
 _                   _    _        _   
(_)_ __  _ __  _   _| |_ | |___  _| |_ 
| | &#39;_ \| &#39;_ \| | | | __|| __\ \/ / __|
| | | | | |_) | |_| | |_ | |_ &gt;  &lt;| |_ 
|_|_| |_| .__/ \__,_|\__(_)__/_/\_\\__|
        |_|                            
Global

:h[elp] keyword - open help for keyword
:sav[eas] file - save file as
:clo[se] - close current pane
:ter[minal] - open a terminal window
K - open man page for word under the cursor
Tip Run vimtutor in a terminal to learn the first Vim commands.

Cursor movement

h - move cursor left
j - move cursor down
k - move cursor up
l - move cursor right
gj - move cursor down (multi-line text)
gk - move cursor up (multi-line text)
H - move to top of screen
M - move to middle of screen
L - move to bottom of screen
w - jump forwards to the start of a word
W - jump forwards to the start of a word (words can contain punctuation)
e - jump forwards to the end of a word
E - jump forwards to the end of a word (words can contain punctuation)
b - jump backwards to the start of a word
B - jump backwards to the start of a word (words can contain punctuation)
ge - jump backwards to the end of a word
gE - jump backwards to the end of a word (words can contain punctuation)
% - move cursor to matching character (default supported pairs: &#39;()&#39;, &#39;{}&#39;, &#39;[]&#39; 
- use :h matchpairs in vim for more info)
0 - jump to the start of the line
^ - jump to the first non-blank character of the line
$ - jump to the end of the line
g_ - jump to the last non-blank character of the line
gg - go to the first line of the document
G - go to the last line of the document
5gg or 5G - go to line 5
gd - move to local declaration
gD - move to global declaration
fx - jump to next occurrence of character x
tx - jump to before next occurrence of character x
Fx - jump to the previous occurrence of character x
Tx - jump to after previous occurrence of character x
; - repeat previous f, t, F or T movement
, - repeat previous f, t, F or T movement, backwards
} - jump to next paragraph (or function/block, when editing code)
{ - jump to previous paragraph (or function/block, when editing code)
zz - center cursor on screen
zt - position cursor on top of the screen
zb - position cursor on bottom of the screen
Ctrl + e - move screen down one line (without moving cursor)
Ctrl + y - move screen up one line (without moving cursor)
Ctrl + b - move screen up one page (cursor to last line)
Ctrl + f - move screen down one page (cursor to first line)
Ctrl + d - move cursor and screen down 1/2 page
Ctrl + u - move cursor and screen up 1/2 page

Insert mode - inserting/appending text

i - insert before the cursor
I - insert at the beginning of the line
a - insert (append) after the cursor
A - insert (append) at the end of the line
o - append (open) a new line below the current line
O - append (open) a new line above the current line
ea - insert (append) at the end of the word
Ctrl + h - delete the character before the cursor during insert mode
Ctrl + w - delete word before the cursor during insert mode
Ctrl + j - add a line break at the cursor position during insert mode
Ctrl + t - indent (move right) line one shiftwidth during insert mode
Ctrl + d - de-indent (move left) line one shiftwidth during insert mode
Ctrl + n - insert (auto-complete) next match before the cursor during insert mode
Ctrl + p - insert (auto-complete) previous match before the cursor during insert mode
Ctrl + rx - insert the contents of register x
Ctrl + ox - Temporarily enter normal mode to issue one normal-mode command x.
Esc or Ctrl + c - exit insert mode

Editing

r - replace a single character.
R - replace more than one character, until ESC is pressed.
J - join line below to the current one with one space in between
gJ - join line below to the current one without space in between
gwip - reflow paragraph
g~ - switch case up to motion
gu - change to lowercase up to motion
gU - change to uppercase up to motion
cc - change (replace) entire line
c$ or C - change (replace) to the end of the line
ciw - change (replace) entire word
cw or ce - change (replace) to the end of the word
s - delete character and substitute text (same as cl)
S - delete line and substitute text (same as cc)
xp - transpose two letters (delete and paste)
u - undo
U - restore (undo) last changed line
Ctrl + r - redo
. - repeat last command

Marking text (visual mode)

v - start visual mode, mark lines, then do a command (like y-yank)
V - start linewise visual mode
o - move to other end of marked area
Ctrl + v - start visual block mode
O - move to other corner of block
aw - mark a word
ab - a block with ()
aB - a block with {}
at - a block with &lt;&gt; tags
ib - inner block with ()
iB - inner block with {}
it - inner block with &lt;&gt; tags
Esc or Ctrl + c - exit visual mode

Visual commands

&gt; - shift text right
&lt; - shift text left
y - yank (copy) marked text
d - delete marked text
~ - switch case
u - change marked text to lowercase
U - change marked text to uppercase

Registers

:reg[isters] - show registers content
&quot;xy - yank into register x
&quot;xp - paste contents of register x
&quot;+y - yank into the system clipboard register
&quot;+p - paste from the system clipboard register
Tip Registers are being stored in ~/.viminfo, and will be loaded again on next restart of vim.

Special registers:

0 - last yank
&quot; - unnamed register, last delete or yank
% - current file name
# - alternate file name
* - clipboard contents (X11 primary)
+ - clipboard contents (X11 clipboard)
/ - last search pattern
: - last command-line
. - last inserted text
- - last small (less than a line) delete
= - expression register
_ - black hole register

Marks and positions

:marks - list of marks
ma - set current position for mark A
`a - jump to position of mark A
y`a - yank text to position of mark A
`0 - go to the position where Vim was previously exited
`&quot; - go to the position when last editing this file
`. - go to the position of the last change in this file
`` - go to the position before the last jump
:ju[mps] - list of jumps
Ctrl + i - go to newer position in jump list
Ctrl + o - go to older position in jump list
:changes - list of changes
g, - go to newer position in change list
g; - go to older position in change list
Ctrl + ] - jump to the tag under cursor
Tip To jump to a mark you can either use a backtick (`) or an apostrophe (&#39;).
Using an apostrophe jumps to the beginning (first non-blank) of the line holding the mark.

Macros

qa - record macro a
q - stop recording macro
@a - run macro a
@@ - rerun last run macro

Cut and paste

yy - yank (copy) a line
2yy - yank (copy) 2 lines
yw - yank (copy) the characters of the word from the cursor position to the start of the next word
yiw - yank (copy) word under the cursor
yaw - yank (copy) word under the cursor and the space after or before it
y$ or Y - yank (copy) to end of line
p - put (paste) the clipboard after cursor
P - put (paste) before cursor
gp - put (paste) the clipboard after cursor and leave cursor after the new text
gP - put (paste) before cursor and leave cursor after the new text
dd - delete (cut) a line
2dd - delete (cut) 2 lines
dw - delete (cut) the characters of the word from the cursor position to the start of the next word
diw - delete (cut) word under the cursor
daw - delete (cut) word under the cursor and the space after or before it
:3,5d - delete lines starting from 3 to 5
Tip You can also use the following characters to specify the range:
e.g.
:.,$d - From the current line to the end of the file
:.,1d - From the current line to the beginning of the file
:10,1d - From the 10th line to the beginning of the file
:g/{pattern}/d - delete all lines containing pattern
:g!/{pattern}/d - delete all lines not containing pattern
d$ or D - delete (cut) to the end of the line
x - delete (cut) character

Indent text

&gt;&gt; - indent (move right) line one shiftwidth
&lt;&lt; - de-indent (move left) line one shiftwidth
&gt;% - indent a block with () or {} (cursor on brace)
&lt;% - de-indent a block with () or {} (cursor on brace)
&gt;ib - indent inner block with ()
&gt;at - indent a block with &lt;&gt; tags
3== - re-indent 3 lines
=% - re-indent a block with () or {} (cursor on brace)
=iB - re-indent inner block with {}
gg=G - re-indent entire buffer
]p - paste and adjust indent to current line

Exiting

:w - write (save) the file, but don&#39;t exit
:w !sudo tee % - write out the current file using sudo
:wq or :x or ZZ - write (save) and quit
:q - quit (fails if there are unsaved changes)
:q! or ZQ - quit and throw away unsaved changes
:wqa - write (save) and quit on all tabs

Search and replace

/pattern - search for pattern
?pattern - search backward for pattern
\vpattern - &#39;very magic&#39; pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)
n - repeat search in same direction
N - repeat search in opposite direction
:%s/old/new/g - replace all old with new throughout file
:%s/old/new/gc - replace all old with new throughout file with confirmations
:noh[lsearch] - remove highlighting of search matches

Search in multiple files

:vim[grep] /pattern/ {`{file}`} - search for pattern in multiple files
e.g. :vim[grep] /foo/ **/*
:cn[ext] - jump to the next match
:cp[revious] - jump to the previous match
:cope[n] - open a window containing the list of matches
:ccl[ose] - close the quickfix window

Tabs

:tabnew or :tabnew {page.words.file} - open a file in a new tab
Ctrl + wT - move the current split window into its own tab
gt or :tabn[ext] - move to the next tab
gT or :tabp[revious] - move to the previous tab
#gt - move to tab number #
:tabm[ove] # - move current tab to the #th position (indexed from 0)
:tabc[lose] - close the current tab and all its windows
:tabo[nly] - close all tabs except for the current one
:tabdo command - run the command on all tabs (e.g. :tabdo q - closes all opened tabs)

Working with multiple files

:e[dit] file - edit a file in a new buffer
:bn[ext] - go to the next buffer
:bp[revious] - go to the previous buffer
:bd[elete] - delete a buffer (close a file)
:b[uffer]# - go to a buffer by index #
:b[uffer] file - go to a buffer by file
:ls or :buffers - list all open buffers
:sp[lit] file - open a file in a new buffer and split window
:vs[plit] file - open a file in a new buffer and vertically split window
:vert[ical] ba[ll] - edit all buffers as vertical windows
:tab ba[ll] - edit all buffers as tabs
Ctrl + ws - split window
Ctrl + wv - split window vertically
Ctrl + ww - switch windows
Ctrl + wq - quit a window
Ctrl + wx - exchange current window with next one
Ctrl + w= - make all windows equal height &amp; width
Ctrl + wh - move cursor to the left window (vertical split)
Ctrl + wl - move cursor to the right window (vertical split)
Ctrl + wj - move cursor to the window below (horizontal split)
Ctrl + wk - move cursor to the window above (horizontal split)
Ctrl + wH - make current window full height at far left (leftmost vertical window)
Ctrl + wL - make current window full height at far right (rightmost vertical window)
Ctrl + wJ - make current window full width at the very bottom (bottommost horizontal window)
Ctrl + wK - make current window full width at the very top (topmost horizontal window)

Diff

zf - manually define a fold up to motion
zd - delete fold under the cursor
za - toggle fold under the cursor
zo - open fold under the cursor
zc - close fold under the cursor
zr - reduce (open) all folds by one level
zm - fold more (close) all folds by one level
zi - toggle folding functionality
]c - jump to start of next change
[c - jump to start of previous change
do or :diffg[et] - obtain (get) difference (from other buffer)
dp or :diffpu[t] - put difference (to other buffer)
:diffthis - make current window part of diff
:dif[fupdate] - update differences
:diffo[ff] - switch off diff mode for current window

#######################################################################################################
Processing file: justomatic
   _           _                        _   _      
  (_)_   _ ___| |_ ___  _ __ ___   __ _| |_(_) ___ 
  | | | | / __| __/ _ \| &#39;_ ` _ \ / _` | __| |/ __|
  | | |_| \__ \ || (_) | | | | | | (_| | |_| | (__ 
 _/ |\__,_|___/\__\___/|_| |_| |_|\__,_|\__|_|\___|
|__/                                               
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp1=/tmp/$$_$$
Tmp2=/tmp/$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$
trap &#39;exit 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot; &quot;$Tmp1&quot; &quot;$Tmp2&quot; &quot;$Tmp3&quot;&#39; EXIT
rm -f &quot;$Tmp&quot;  &gt;/dev/null 2&gt;&amp;1
rm -f &quot;$Tmp1&quot;  &gt;/dev/null 2&gt;&amp;1
rm -f &quot;$Tmp2&quot;  &gt;/dev/null 2&gt;&amp;1
rm -f &quot;$Tmp3&quot;  &gt;/dev/null 2&gt;&amp;1
#================================================================

source ~/bash.library

INDENT=&quot;&quot;
DELIM=&quot; &quot;
BAR=&quot;&quot;
SPACE=&quot;&quot;
W=32

while getopts &quot;isn:f:c&quot; arg
do
    case $arg in
        i) INDENT=&quot;YES&quot;
           echo &quot;$INDENT&quot;
           ;;
        s) SPACE=&quot;    &quot;
           ;;
        n) W=$OPTARG
           ;;
        f) DELIM=&quot;&quot;
           justify_file &quot;$OPTARG&quot; &quot;$W&quot;
           exit 0
           ;;
        c) DELIM=&quot;,&quot;
           ;;
    esac
done
shift $(($OPTIND - 1))
echo &quot;$INDENT&quot;

if [ &quot;$INDENT&quot; == &quot;YES&quot; ]; then    
    indent_file &quot;$OPTARG&quot;
fi



#######################################################################################################
Processing file: listing
 _ _     _   _             
| (_)___| |_(_)_ __   __ _ 
| | / __| __| | &#39;_ \ / _` |
| | \__ \ |_| | | | | (_| |
|_|_|___/\__|_|_| |_|\__, |
                     |___/ 
#!/usr/bin/bash
# *********************************************************DATEOMATIC: Wed Feb 26 00:01:17 EST 2025
# *********************************************************HASHOMATIC: 77817de3816b3a115eaec6bb1cc34eea
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap &#39;exit 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot; &quot;$Tmp0&quot; &quot;$Tmp1&quot; &quot;$Tmp2&quot; &quot;$Tmp3&quot;&#39; EXIT
rm -f &quot;$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3&quot;  &gt;/dev/null 2&gt;&amp;1;

UPDATE=&quot;NO&quot;
while getopts &quot;cur:&quot; arg
do
    case $arg in
        c) clear
           ;;
        u) UPDATE=&quot;YES&quot;
           exit 0
           ;;
        r) OA=&quot;$OPTARG&quot;
           exit 0
           ;;
    esac
done
shift $(($OPTIND - 1))

echo &quot;\`\`\`&quot;
for file in `ls -A | grep -v README.md | grep -v .git | sort | uniq`; do
        # Operations on each file, for example:
        echo &quot;&quot;
        echo &quot;#######################################################################################################&quot;
        echo &quot;Processing file: $file&quot;
        figlet &quot;$file&quot;
        cat &quot;$file&quot;
done
echo &quot;\`\`\`&quot;


#######################################################################################################
Processing file: make
                 _        
 _ __ ___   __ _| | _____ 
| &#39;_ ` _ \ / _` | |/ / _ \
| | | | | | (_| |   &lt;  __/
|_| |_| |_|\__,_|_|\_\___|
                          
echo &quot;Copy .vimrc to ~&quot;
cp .vimrc ~
echo &quot;Copy .bashrc to ~&quot;
cp .bashrc ~
echo &quot;Copy bashrc.shared to ~&quot;
cp bashrc.shared ~
ls -l

#######################################################################################################
Processing file: newbashscript
                     _               _                   _       _   
 _ __   _____      _| |__   __ _ ___| |__  ___  ___ _ __(_)_ __ | |_ 
| &#39;_ \ / _ \ \ /\ / / &#39;_ \ / _` / __| &#39;_ \/ __|/ __| &#39;__| | &#39;_ \| __|
| | | |  __/\ V  V /| |_) | (_| \__ \ | | \__ \ (__| |  | | |_) | |_ 
|_| |_|\___| \_/\_/ |_.__/ \__,_|___/_| |_|___/\___|_|  |_| .__/ \__|
                                                          |_|        
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap &#39;exit 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot; &quot;$Tmp0&quot; &quot;$Tmp1&quot; &quot;$Tmp2&quot; &quot;$Tmp3&quot;&#39; EXIT
rm -f &quot;$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3&quot;  &gt;/dev/null 2&gt;&amp;1;

UPDATE=&quot;NO&quot;
while getopts &quot;ur:&quot; arg
do
    case $arg in
        u) UPDATE=&quot;YES&quot;
        r) UA=&quot;$OPTARG&quot;
           exit 0
           ;;
    esac
done
shift $(($OPTIND - 1))

if [ &quot;$UPDATE&quot; == &quot;YES&quot; ]; then                                                                                               
    RETVAL=&quot;YES&quot;                                                                                                             
else                                                                                                                         
    RETVAL=&quot;NO&quot;                                                                                                              
fi                                                                                                                           


#================================================================
# HEADER
#================================================================
#% SYNOPSIS
#+    ${SCRIPT_NAME} [-hv] [-o[file]] args ...
#%
#% DESCRIPTION
#%    This is a script template
#%    to start any good shell script.
#%
#% OPTIONS
#%    -o [file], --output=[file]    Set log file (default=/dev/null)
#%                                  use DEFAULT keyword to autoname file
#%                                  The default value is /dev/null.
#%    -t, --timelog                 Add timestamp to log (&quot;+%y/%m/%d@%H:%M:%S&quot;)
#%    -x, --ignorelock              Ignore if lock file exists
#%    -h, --help                    Print this help
#%    -v, --version                 Print script information
#%
#% EXAMPLES
#%    ${SCRIPT_NAME} -o DEFAULT arg1 arg2
#%
#================================================================
#- IMPLEMENTATION
#-    version         ${SCRIPT_NAME} 0.0.1
#-    author          MJE
#-    copyright       Copyright (c) All Rights Reserved
#-    license         All Rights Reserved
#-    script_id       0.0.1
#-
#================================================================
#  HISTORY
#     2024/11/15 : MJE : Script creation
# 
#================================================================
#  DEBUG OPTION
#    set -n  # Uncomment to check your syntax, without execution.
#    set -x  # Uncomment to debug this shell script
#
#================================================================
# END_OF_HEADER
#================================================================

#== needed variables ==#
SCRIPT_HEADSIZE=$(head -200 ${0} |grep -n &quot;^# END_OF_HEADER&quot; | cut -f1 -d:)
SCRIPT_NAME=&quot;$(basename ${0})&quot;

#== usage functions ==#
usage() { printf &quot;Usage: &quot;; head -${SCRIPT_HEADSIZE:-99} ${0} | grep -e &quot;^#+&quot; | sed -e &quot;s/^#+[ ]*//g&quot; -e &quot;s/\${SCRIPT_NAME}/${SCRIPT_NAME}/g&quot; ; }
usagefull() { head -${SCRIPT_HEADSIZE:-99} ${0} | grep -e &quot;^#[%+-]&quot; | sed -e &quot;s/^#[%+-]//g&quot; -e &quot;s/\${SCRIPT_NAME}/${SCRIPT_NAME}/g&quot; ; }
scriptinfo() { head -${SCRIPT_HEADSIZE:-99} ${0} | grep -e &quot;^#-&quot; | sed -e &quot;s/^#-//g&quot; -e &quot;s/\${SCRIPT_NAME}/${SCRIPT_NAME}/g&quot;; }

cat xxx | grep &quot;yyy&quot;  | gawk &#39;
BEGIN {
    NOTHING=0
}
//{
    
}
END {
    NOTHING=0
}&#39;

# Check if a file exists
if [ -f &quot;/path/to/your/file&quot; ]; then
  echo &quot;File exists.&quot;
else
  echo &quot;File does not exist.&quot;
fi

# Check if a directory exists
if [ -d &quot;/path/to/your/directory&quot; ]; then
  echo &quot;Directory exists.&quot;
else
  echo &quot;Directory does not exist.&quot;
fi

# Check if input file is provided
if [ -z &quot;$1&quot; ]; then
    echo &quot;Usage: `basename &quot;$0&quot;` &lt;input_file&gt;&quot;
    exit 1
if

# filename munging
input_file=&quot;$1&quot;                                                                                         
output_file=&quot;${input_file%.*}.html&quot;
cat &quot;$input_file&quot;  | sed &#39;/^$/d&#39; | sort | uniq &gt; $Tmp; cp $Tmp &quot;$input_file&quot;
line_count=$(wc -l &lt; &quot;$input_file&quot;)
half_lines=$((line_count / 3))

# ifs
if [ &quot;$num&quot; -eq 2 ]; then


isnfs () {                                                                                                                       
    LOCAL=`stat -f -c %T &quot;$1&quot;`                                                                                                   
    if [ &quot;$LOCAL&quot; == &quot;nfs&quot; ]; then                                                                                               
         RETVAL=&quot;YES&quot;                                                                                                             
    else                                                                                                                         
         RETVAL=&quot;NO&quot;                                                                                                              
    fi                                                                                                                           
}

consolebar () {
    echo &quot;********************************************************************************************&quot;
}
consolemsg () {
#   consolebar
    echo &quot;** $1&quot;
#   consolebar
    A=$A
}
optconsolemsg () {
#    echo &quot;** $1&quot;
    A=$A
}


while getopts &quot;ha:&quot; arg
do
    case $arg in
        h) usagefull;
           exit 0;
           ;;
        a) A=&quot;$OPTARG&quot;
           exit 0
           ;;
    esac
done
shift $(($OPTIND - 1))
















# +===================================================================================================+
# +===================================================================================================+

# -a file file exists
#  -d file file exists and is a directory
#  -f file file exists and is an ordinary file
#  -r file file exists and is readable
#  -s file file exists and has a size greater than 0
#  -w file file exits and is writable
#  -x file file exists and is executable
#  -L file file exists and is a symbolic link
#  -O file file exists and owned by user file1 i
#  -nt file2 file1 exists and is newer than file2 file1 
#  -ot file2 file1 exists and is older then file
# 
# if [ ! -d &quot;$DIRECTORY&quot; ]; then
#   echo &quot;The directory [$DIRECTORY] does not exist.&quot;
#   exit 0
# fi
# 
# 0  - Normal Style (reset)
# 1  - Bold
# 2  - Dim
# 3  - Italic
# 4  - Underlined
# 5  - Blinking
# 7  - Reverse
# 8  - Invisible
# 30 - BLACK
# 31 - RED
# 32 - GREEN
# 33 - YELLOW
# 34 - BLUE
# 35 - PURPLE
# 36 - CYAN
# 37 - WHITE
# bold=$(printf &#39;\033[%sm&#39; &quot;4&quot;)
# reset=$(printf &#39;\033[%sm&#39; &quot;0&quot;)
# 
# cat &lt;&lt;USAGE_TEXT
# 
# USAGE_TEXT
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 









#######################################################################################################
Processing file: notes
             _            
 _ __   ___ | |_ ___  ___ 
| &#39;_ \ / _ \| __/ _ \/ __|
| | | | (_) | ||  __/\__ \
|_| |_|\___/ \__\___||___/
                          

    if g:multi_toggle_state == 0
        nnoremap &lt;F7&gt; :call ToUpperUnderCursor()&lt;CR&gt;
        call s:SLine(&quot;Upper Mode&quot;)
        let g:multi_toggle_state = 2
        return
    endif
    if g:multi_toggle_state == 2
        nnoremap &lt;F7&gt; :call ToLowerUnderCursor()&lt;CR&gt;
        call s:SLine(&quot;Lower Mode&quot;)
        let g:multi_toggle_state = 3
        return
    endif
    if g:multi_toggle_state == 3
        nnoremap &lt;F7&gt; gv
        call s:SLine(&quot;Re-Select Visual Mode (gv)&quot;)
        let g:multi_toggle_state = 4
        return
    endif
    if g:multi_toggle_state == 4
        nnoremap &lt;F7&gt; :%s/\&lt;&lt;C-r&gt;&lt;C-w&gt;\&gt;//gI&lt;Left&gt;&lt;Left&gt;&lt;Left&gt;
        call s:SLine(&quot;Search Word Under Cursor Mode&quot;)
        let g:multi_toggle_state = 5
        return
    endif
    if g:multi_toggle_state == 5
        nnoremap &lt;F7&gt; : e ~/.vim/vimbrief.txt&lt;CR&gt;
        call s:SLine(&quot;Open Vim Cheatsheet Mode &quot; . $HOME . &quot;/.vim/vimbrief.txt&quot;)
        let g:multi_toggle_state = 6
        return
    endif
    if g:multi_toggle_state == 6
        nnoremap         &lt;F7&gt; :call g:FlashCard($HOME . &quot;/.vim/1.fc&quot;)&lt;cr&gt;
        nnoremap &lt;leader&gt;&lt;F7&gt; :call g:UnFlashCard()&lt;cr&gt;
        call s:SLine(&quot;Flash Card Mode&quot;)
        let g:multi_toggle_state = 7
        return
    endif
    if g:multi_toggle_state == 7
        nnoremap         &lt;F7&gt; :call EditDotFiles()&lt;cr&gt;
        call s:SLine(&quot;Edit dots and Configs&quot;)
        let g:multi_toggle_state = 8
        return
    endif
    if g:multi_toggle_state == 8
        &quot; nnoremap         &lt;F7&gt; :call OpenReadOnlyFile(&quot;/tmp/zed&quot;)&lt;CR&gt;
        let xxx=sMt[g:multi_toggle_state-1][1]
        call s:SLine(xxx)
        nnoremap         &lt;F7&gt; :ls&lt;cr&gt;
        execute &quot;silent nnoremap  &lt;F7&gt; :call g:Test()&quot;
        let g:multi_toggle_state = 9
        return
    endif


    if g:multi_toggle_state == 9
        nnoremap &lt;F7&gt; :call MultiToggleVoid()&lt;CR&gt;
        call s:SLine(&quot;Void Mode&quot;)
        let g:multi_toggle_state = 1
        return
    endif
# --- Example Usage (Add to your script) ---
# Example of how to use functions.
# if command_exists &quot;git&quot;; then
#   echo &quot;Git is installed.&quot;
# fi
#
# my_string=&quot;  Hello, World!  &quot;
# trimmed_string=$(trim &quot;$my_string&quot;)
# echo &quot;Trimmed: &#39;$trimmed_string&#39;&quot;
#
# if is_dir &quot;/tmp&quot;; then
#   echo &quot;/tmp exists&quot;
# fi
#
# array=(&quot;apple&quot; &quot;banana&quot; &quot;cherry&quot;)
# if array_contains &quot;banana&quot; &quot;${array[@]}&quot;; then
#   echo &quot;banana is in the array&quot;
# fi

# --- End of Library ---

# Key improvements and explanations:
# 
# * **Robust String Handling:**
#     * `trim()`: Uses parameter expansion for efficient whitespace trimming.
#     * `starts_with()`, `ends_with()`, `contains()`: Simple, readable pattern matching.
#     * `replace()`: Replaces all instances of a string.
#     * `substring()`: Allows extraction of substrings by index and length.
# * **Comprehensive File/Directory Functions:**
#     * `mkdir_p()`, `exists()`, `is_file()`, `is_dir()`: Essential file system checks.
#     * `abspath()`: Resolves relative paths, crucial for portability.
#     * `basename()`, `dirname()`, `extension()`: Path manipulation.
#     * `cp_r()`, `mv_f()`, `rm_rf()`: Safe file operations.
# * **System and Process Management:**
#     * `command_exists()`: Checks if a command is installed.
#     * `pidof_name()`, `kill_name()`, `kill_pid()`: Process control.
#     * `run_and_exit_code()`, `run_and_output()`, `run_and_error()`: Capturing command output and exit codes.
# * **Array Handling:**
#     * `array_contains()`: Checks if an array contains a value.
#     * `array_join()`: Joins array elements with a delimiter.
# * **Networking:**
#     * `is_reachable()`: Checks network connectivity.
#     * `is_port_open()`: Checks if a port is listening.
# * **Input/Output:**
#     * `eprint()`: Prints to standard error.
#     * `read_prompt()`: Prompts for user input.
# * **Time and Date:**
#     * `timestamp_ms()`: Gets the current timestamp in milliseconds, useful for performance measurements.
# * **Clear Structure and Comments:**
#     * Functions are grouped logically.
#     * Comments explain the purpose and usage of each function.
#     * Example usage is provided.
# * **Error Handling and Safety:**
#     * Uses `&amp;&gt; /dev/null` to suppress output when needed.
#     * Uses `realpath` to get absolute paths.
#     * Uses `timeout` to avoid infinite port checks.
# * **Portability:** Uses standard bash features.
# 
# How to use:
# 
# 1.  **Save:** Save the code as a `.sh` file (e.g., `utils.sh`).
# 2.  **Source:** In your bash scripts, source the library: `source utils.sh`
# 3.  **Call:** Use the functions as needed. Example: `if

#######################################################################################################
Processing file: other
       _   _               
  ___ | |_| |__   ___ _ __ 
 / _ \| __| &#39;_ \ / _ \ &#39;__|
| (_) | |_| | | |  __/ |   
 \___/ \__|_| |_|\___|_|   
                           
&quot; *****************************************************************************************************
                &quot; W e l c o m e   t o   m y  V I M R C
                &quot; *************************************************************************************
set nocompatible
set hidden                        &quot; Will switch to next buffer without raising an error
set nowrap
set nohlsearch
set noerrorbells
set scrolloff=8
let loaded_matchparen = 1         
            &quot; http://vimrc-dissection.blogspot.com/2006/09/vim-7-re-turn-off-parenparenthesiswhat.html
set splitbelow
set splitright
set cmdheight=2                   &quot; Set the command window height to 2 lines, to avoid many cases
                                  &quot; of having to  press &lt;Enter&gt; to continue
set ruler                         &quot; Display crsr pos on last line of scr or in status line of a window
set number                        &quot; Display line numbers on the left
set wildmenu                      &quot; Better command-line completion
set showcmd                       &quot; Show partial commands in the last line of the screen
set ignorecase                    &quot; Use case insensitive search, except when using capital letters
set smartcase
set backspace=indent,eol,start    &quot; Allow bckspcing over autoindent, line brks &amp; start of insrt action
set nostartofline                 &quot; Stop certain movements from always going to the 1st char of a line.
set laststatus=2                  &quot; Always display the status line, even if only 1 window is displayed
set noswapfile
set nobackup
set undodir=~/.vim/undodir
set undofile
set colorcolumn=104
set background=dark
set laststatus=2                  &quot; For Status Line
set t_Co=256                      &quot; For Status Line

&quot; set relativenumber
&quot; set signcolumn=yes
&quot; set incsearch
&quot; set hlsearch incsearch          &quot; Highlight searches (use &lt;C-L&gt; to temporarily turn off highlighting
                                  &quot; see the mapping of &lt;C-L&gt; below)

&quot; *****************************************************************************************************
                &quot; Indent and Tab  Setup
                &quot; *************************************************************************************
&quot; There are in fact four main methods available for indentation, each one
&quot; overrides the previous if it is enabled, or non-empty for &#39;indentexpr&#39;:
&quot; &#39;autoindent&#39;  uses the indent from the previous line.
&quot;               When opening a new line and no filetype-specific indenting is enabled, keep same
&quot;               indent as line currently on.
&quot; &#39;smartindent&#39; is like &#39;autoindent&#39; but also recognizes some C syntax to
&quot;       increase/reduce the indent where appropriate.
&quot; &#39;cindent&#39; Works more cleverly than the other two and is configurable to
&quot;       different indenting styles.
&quot; &#39;indentexpr&#39;  The most flexible of all: Evaluates an expression to compute
&quot;       the indent of a line.  When non-empty this method overrides
&quot;       the other ones.  See |indent-expression|.
&quot; set cindent                       
set tabstop=4 softtabstop=4
set shiftwidth=4     &quot; Indent settings for using 4 spaces instead of tabs.
                     &quot; Do not change &#39;tabstop&#39; from its default value of 8 
set expandtab
set smartindent
&quot; *****************************************************************************************************
                &quot; Syntax Highlighting
                &quot; *************************************************************************************
syntax off

set confirm                       &quot; Instead of failing a command because of unsaved changes,
                                  &quot; raise a dialogue asking to save changed files.
set visualbell                    &quot; Use visual bell instead of beeping when doing something wrong
set t_vb=
                                  &quot; reset terminal code for visual bell. 
                                  &quot; If visualbell is set, and this line is also included vim will
                                  &quot; neither flash nor beep. If visualbell is unset, this does nothing.
let mapleader = &quot; &quot;               &quot; Leader - ( Spacebar )
let MRU_Auto_Close = 1            &quot; Set MRU window to close after selection
set notimeout ttimeout ttimeoutlen=200  &quot; Quickly time out on keycodes, but never time out on mappings

&quot; *****************************************************************************************************
                &quot; Commands
                &quot; *************************************************************************************
command! -nargs=+ GREP call GrepBuffers(&lt;q-args&gt;)
command! SESSION      :call CaptureSession() 
command! MyLinter :caddexpr system(&quot;cat zzzz&quot;) | copen
command! ZZZZ :caddexpr system(&quot;cat zzzz&quot;) | copen
map &lt;C-j&gt; :cn&lt;CR&gt;
map &lt;C-k&gt; :cp&lt;CR&gt;
map &lt;C-@&gt; @a

&quot;  :copen &quot; Open the quickfix window
&quot;  :ccl   &quot; Close it
&quot;  :cw    &quot; Open it if there are &quot;errors&quot;, close it otherwise (some people prefer this)
&quot;  :cn    &quot; Go to the next error in the window
&quot;  :cp    &quot; Go to the previous error in the window
&quot;  :cnf   &quot; Go to the first error in the next file
&quot;  :.cc   &quot; Go to error under cursor (if cursor is in quickfix window)
&quot;
&quot; *****************************************************************************************************
                &quot; Pre Vundle Setup
                &quot; *************************************************************************************
filetype off

&quot; let NOVUNDLE = 1
&quot; *****************************************************************************************************
                &quot; Vundle            - see :h vundle for more details or wiki for FAQ
                &quot; *******************************************************************
                &quot; git clone  https://github.com/VundleVim/Vundle.vim.git  ~/.vim/bundle/Vundle.vim
                &quot; git clone  https://github.com/archernar/home.git .
                &quot; git clone  https://github.com/archernar/dotfiles.git    ~/tmp
                &quot; git clone
                &quot; OLD TO BE REMOVED git clone  https://github.com/archernar/Snips.git .
                &quot; :PluginList       - lists configured plugins
                &quot; :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
                &quot; :PluginUpdate     - &lt;leader&gt;p
                &quot; :PluginSearch foo - searches for foo; append `!` to refresh local cache
                &quot; :PluginClean      - confirms removal of unused plugins;
                &quot;                     append `!` to auto-approve removal
                &quot; *************************************************************************************
                
&quot; *****************************************************************************************************
                &quot; Vundle Begin
                &quot; *************************************************************************************
if !exists(&quot;NOVUNDLE&quot;)
    set rtp+=~/.vim/bundle/Vundle.vim
    call vundle#begin()
    &quot; Plugin &#39;VundleVim/Vundle.vim&#39;
    Plugin &#39;archernar/vim-flashcard&#39;
    Plugin &#39;archernar/vim-dir&#39;
    Plugin &#39;archernar/vim-progsnips&#39;
    Plugin &#39;archernar/vim-map&#39;
    Plugin &#39;archernar/vim-utils&#39;
    Plugin &#39;archernar/vim-session&#39;
    Plugin &#39;archernar/vim-program&#39;
    Plugin &#39;archernar/vim-monochrome&#39;
    Plugin &#39;archernar/vim-mru&#39;
    Plugin &#39;vim-scripts/grep.vim&#39;      &quot; https://github.com/vim-scripts/grep.vim
    Plugin &#39;gruvbox-community/gruvbox&#39;
    Bundle &#39;Lokaltog/vim-monotone.git&#39;
    Bundle &#39;owickstrom/vim-colors-paramount&#39;
    Plugin &#39;tpope/vim-surround&#39;
    Plugin &#39;vim-airline/vim-airline&#39;
    &quot; Plugin &#39;tpope/vim-fugitive&#39;
    &quot; Plugin &#39;vim-airline/vim-airline-themes&#39;
    &quot; Plugin &#39;jeetsukumaran/vim-buffergator&#39;
    &quot; Plugin &#39;ctrlpvim/ctrlp.vim&#39;
    &quot;
    call vundle#end()
endif
&quot; *****************************************************************************************************
                &quot; Vundle End
                &quot; *************************************************************************************
                                  
&quot; *****************************************************************************************************
                &quot; Post Vundle Setup
                &quot; *************************************************************************************
filetype plugin indent on         &quot; required, to ignore plugin indent changes, instead use: 
                                  &quot; filetype plugin on
                                  &quot; Put non-Plugin stuff after this line



&quot; *****************************************************************************************************
                &quot; Functions
                &quot; *************************************************************************************
function g:LogMessage(...)
    let l:ret = 0

    let l:messages=[]
    call add(l:messages, a:1)
    call writefile(l:messages, &quot;/tmp/vimscript.log&quot;, &quot;a&quot;)
    return l:ret
endfunction

&quot; *****************************************************************************************************
                &quot; Remaps
                &quot; *************************************************************************************
nnoremap         &lt;F1&gt;      :cclose&lt;cr&gt;:bnext&lt;cr&gt;
nnoremap &lt;leader&gt;&lt;F1&gt;      :cclose&lt;cr&gt;
inoremap         &lt;F5&gt; &lt;esc&gt;:call ProgramCompile()&lt;cr&gt;
nnoremap         &lt;F5&gt;      :call ProgramCompile()&lt;cr&gt;
nnoremap &lt;leader&gt;&lt;F6&gt;      :cclose&lt;cr&gt;
inoremap         &lt;F6&gt; &lt;esc&gt;:call ProgramRun()&lt;cr&gt;
nnoremap         &lt;F6&gt;      :call ProgramRun()&lt;cr&gt;
nnoremap &lt;Leader&gt;p         :PluginUpdate&lt;cr&gt;

&quot; *****************************************************************************************************
                &quot; Folding
                &quot; *************************************************************************************

&quot; set foldcolumn=3
&quot; set foldmethod=marker
&quot; set foldlevelstart=20
&quot; set foldlevelstart=20
set foldlevel=1
set foldmethod=marker

&quot; *****************************************************************************************************
                &quot; Auto Commands
                &quot; *************************************************************************************
    augroup AUTOGROUPONE
        autocmd!
        &quot;au BufNewFile,BufRead *.ses let s=g:SessionMan()
    augroup END

&quot; *****************************************************************************************************
                &quot; Session Setup
                &quot; *************************************************************************************
if ( 1 == 0 ) 
    if ( argc() == 0 ) 
         augroup VIMAUTOGROUPA
             autocmd!
             autocmd VimEnter * :call LoadSession()
         augroup END
    endif
    if ( argc() == 1 ) 
         let s:n=match(argv(0), &quot;vimsession$&quot;)
         if (s:n&gt;0)
             let $VIMFIRSTFILE=argv(0)
             let s:temp = argv(0)
             let s:temp = substitute(s:temp, &quot;.vimsession$&quot;, &quot;&quot;, &quot;&quot;)
             let $VIMSESSION=s:temp
             let $VIMWINDOW=&quot;NIL&quot;
             let $VIMSPLIT=&quot;NIL&quot;
             if ( 1 == 1 ) 
             augroup VIMAUTOGROUPB
                 autocmd!
                 autocmd VimEnter * :call LoadSession()
                 &quot;autocmd VimEnter * :echom &quot;POPEYE&quot;
             augroup END
             endif
         endif
    endif
endif

&quot;   ***************************************************************************************************
                &quot; Jump to Last Position When Reopening a File
                &quot; *************************************************************************************
   if has(&quot;autocmd&quot;)
      au BufReadPost * if line(&quot;&#39;\&quot;&quot;) &gt; 0 &amp;&amp; line(&quot;&#39;\&quot;&quot;) &lt;= line(&quot;$&quot;)
      \| exe &quot;normal! g&#39;\&quot;&quot; | endif
   endif
function! s:SLine(msg)
    let save_statusline = &amp;statusline  &quot; Save the current statusline
    let &amp;statusline = a:msg
    &quot;let &amp;statusline = save_statusline
endfunction
&quot;
&quot; wget -O ~/.vim/vim.txt https://raw.githubusercontent.com/archernar/basics/refs/heads/master/vim.txt
&quot; nnoremap         &lt;F7&gt; :call g:FlashCard($HOME . &quot;/.vim/1.fc&quot;)&lt;cr&gt;
&quot; nnoremap &lt;leader&gt;&lt;F7&gt; :call g:UnFlashCard()&lt;cr&gt;
&quot;   ***************************************************************************************************
                &quot; Multi Toggle
                &quot; *************************************************************************************
function! MultiToggle()
    if g:multi_toggle_state == 1
        nnoremap &lt;F7&gt; :call ToUpperUnderCursor()&lt;CR&gt;
        call s:SLine(&quot;Upper Mode&quot;)
        let g:multi_toggle_state = 2
        return
    endif
    if g:multi_toggle_state == 2
        nnoremap &lt;F7&gt; :call ToLowerUnderCursor()&lt;CR&gt;
        call s:SLine(&quot;Lower Mode&quot;)
        let g:multi_toggle_state = 3
        return
    endif
    if g:multi_toggle_state == 3
        nnoremap &lt;F7&gt; gv
        call s:SLine(&quot;Re-Select Visual Mode (gv)&quot;)
        let g:multi_toggle_state = 4
        return
    endif
    if g:multi_toggle_state == 4
        nnoremap &lt;F7&gt; :%s/\&lt;&lt;C-r&gt;&lt;C-w&gt;\&gt;//gI&lt;Left&gt;&lt;Left&gt;&lt;Left&gt;
        call s:SLine(&quot;Search Word Under Cursor Mode&quot;)
        let g:multi_toggle_state = 5
        return
    endif
    if g:multi_toggle_state == 5
        nnoremap &lt;F7&gt; : e ~/.vim/vimbrief.txt&lt;CR&gt;
        call s:SLine(&quot;Open Vim Cheatsheet Mode &quot; . $HOME . &quot;/.vim/vimbrief.txt&quot;)
        let g:multi_toggle_state = 6
        return
    endif
    if g:multi_toggle_state == 6
        nnoremap         &lt;F7&gt; :call g:FlashCard($HOME . &quot;/.vim/1.fc&quot;)&lt;cr&gt;
        nnoremap &lt;leader&gt;&lt;F7&gt; :call g:UnFlashCard()&lt;cr&gt;
        call s:SLine(&quot;Flash Card Mode&quot;)
        let g:multi_toggle_state = 7
        return
    endif
    if g:multi_toggle_state == 7
        nnoremap         &lt;F7&gt; :call EditDotFiles()&lt;cr&gt;
        call s:SLine(&quot;Edit dots and Configs&quot;)
        let g:multi_toggle_state = 8
        return
    endif
    if g:multi_toggle_state == 8
        nnoremap         &lt;F7&gt; :call DisplayFileReadonlyPopup(&quot;/tmp/zed&quot;)&lt;CR&gt;
        call s:SLine(&quot;Test&quot;)
        let g:multi_toggle_state = 9
        return
    endif


    if g:multi_toggle_state == 9
        nnoremap &lt;F7&gt; :call MultiToggleVoid()&lt;CR&gt;
        call s:SLine(&quot;Void Mode&quot;)
        let g:multi_toggle_state = 1
        return
    endif
endfunction

function! EditDotFiles()
        execute  &quot;edit ~/.bashrc&quot;
        execute  &quot;edit ~/.vimrc&quot;
        execute  &quot;edit ~/.profile&quot;
        execute  &quot;edit ~/.vim/vimbrief.txt&quot;
        execute  &quot;edit ~/.vim/vim.txt&quot;
endfunction
function! MultiToggleVoid()
        let g:multi_toggle_state = g:multi_toggle_state = 2
endfunction

let g:multi_toggle_state = 1
let &amp;statusline = &quot;Void Mode&quot;
nnoremap &lt;F7&gt; :call MultiToggleVoid()&lt;CR&gt;
nnoremap &lt;F8&gt; :call MultiToggle()&lt;CR&gt;

function! ToLowerUnderCursor()
  &quot; Get the current cursor position.
  let [row, col] = getpos(&#39;.&#39;)[1:2]

  &quot; Get the character under the cursor.
  let char = getline(row)[col-1]

  &quot; Check if a character exists at the cursor position (not end of line).
  if char != &quot;&quot;

    &quot; Convert the character to lowercase.
    let lower_char = tolower(char)

    &quot; Replace the character under the cursor with the lowercase version.
    call setline(row, strpart(getline(row), 0, col-1) . lower_char . strpart(getline(row), col))

    &quot; Restore the cursor position (important!).
    call cursor(row, col)
  endif
endfunction
function! ToUpperUnderCursor()
  &quot; Get the current cursor position.
  let [row, col] = getpos(&#39;.&#39;)[1:2]

  &quot; Get the character under the cursor.
  let char = getline(row)[col-1]

  &quot; Check if a character exists at the cursor position (not end of line).
  if char != &quot;&quot;

    &quot; Convert the character to uppercase.
    let upper_char = toupper(char)

    &quot; Replace the character under the cursor with the uppercase version.
    call setline(row, strpart(getline(row), 0, col-1) . upper_char . strpart(getline(row), col))

    &quot; Restore the cursor position (important!).
    call cursor(row, col)
  endif
endfunction

&quot; Map a key to call the function.  For example, map &lt;Leader&gt;u to it.
&quot; You can choose any key combination you prefer.  &lt;Leader&gt; is often \.
&quot; See :help leader for more about setting the leader key.
&quot; Example:
&quot;
&quot; hello
&quot;
&quot;
&quot; Option 1: Add the current file
nnoremap &lt;leader&gt;gaf :!git add %&lt;CR&gt;

&quot; Option 2: Add the current file and stage changes
nnoremap &lt;leader&gt;gac :!git add % &amp;&amp; git commit -m &quot;Staged changes&quot; &lt;CR&gt;

&quot; Option 3: Add all changes in the current directory
nnoremap &lt;leader&gt;gaa :!git add .&lt;CR&gt;

&quot; Option 4: Add all changes in the current directory and stage changes
nnoremap &lt;leader&gt;gss :!git add . &amp;&amp; git commit -m &quot;Staged all changes&quot; &lt;CR&gt;

&quot; Option 5: Add the current file and show git status
nnoremap &lt;leader&gt;gas :!git add %&lt;CR&gt;:!git status&lt;CR&gt;

&quot; Option 6: Add all changes in the current directory and show git status
nnoremap &lt;leader&gt;gaas :!git add .&lt;CR&gt;:!git status&lt;CR&gt;

&quot; Option 7: Add the current file and run a custom git command
&quot;nnoremap &lt;leader&gt;gac :!git add % &amp;&amp; git commit -m &lt;C-r&gt;=@%&lt;CR&gt;&lt;CR&gt;

&quot; Option 8: Add all changes in the current directory and run a custom git command
nnoremap &lt;leader&gt;gacc :!git add . &amp;&amp; git commit -m &lt;C-r&gt;=getcwd()&lt;CR&gt;&lt;CR&gt;



function! DisplayFileReadonlyPopup(filepath)
  &quot; Check if the file exists and is readable
  if !filereadable(a:filepath)
    echo &quot;File not found or not readable: &quot; . a:filepath
    return
  endif

  &quot; Create a new buffer for the popup
  silent new
  let bufnum = bufnr(&quot;%&quot;)

  &quot; Set options for the buffer (readonly, no swap, no undo, no list in buffers)
  &quot;setlocal readonly noswapfile nobuflisted noundofile nowindow
  setlocal readonly noswapfile

  &quot; Read the file contents into the buffer
  silent execute &quot;read &quot; . a:filepath

  &quot; Open the popup window.  Adjust width and height as needed.
  call popup_create(bufnum, { &#39;title&#39;: fnamemodify(a:filepath, &#39;:t&#39;),&#39;line&#39;: 1,&#39;col&#39;: 1,&#39;width&#39;: 80,&#39;height&#39;: 20,&#39;scrollbar&#39;: 1,&#39;border&#39;: 1, &#39;wrap&#39;: 1})

  &quot; Store the popup ID in the buffer so we can close it later
  let b:popup_id = popup_getid()

endfunction

&quot;    call popup_create(bufnum, {
&quot;      \ &#39;title&#39;: fnamemodify(a:filepath, &#39;:t&#39;),
&quot;      \ &#39;line&#39;: 1,
&quot;      \ &#39;col&#39;: 1,
&quot;      \ &#39;width&#39;: 80,
&quot;      \ &#39;height&#39;: 20,
&quot;      \ &#39;scrollbar&#39;: 1,
&quot;      \ &#39;border&#39;: 1,
&quot;      \ &#39;wrap&#39;: 1,
&quot;      \ &#39;close&#39;: &#39;any&#39;,
&quot;      \ })
&quot; Example mapping to display the current file in a popup
nnoremap &lt;leader&gt;pf :call DisplayFileReadonlyPopup(&quot;%:p&quot;)&lt;CR&gt;

&quot; Example mapping to display a specific file in a popup
nnoremap &lt;leader&gt;po :call DisplayFileReadonlyPopup(&quot;path/to/my/file.txt&quot;)&lt;CR&gt;  &quot; Replace with your path

&quot; Example command to display a file
command! -nargs=1 DisplayFileReadonlyPopup :call DisplayFileReadonlyPopup(&lt;q-args&gt;)

&quot; Function to close the popup
function! CloseReadonlyPopup()
  if exists(&quot;b:popup_id&quot;) &amp;&amp; popup_exists(b:popup_id)
    call popup_close(b:popup_id)
    &quot; Clean up the buffer - optional, but good practice
    &quot; execute &quot;bwipeout &quot; . bufnr(&quot;%&quot;)
    unlet b:popup_id
  endif
endfunction

&quot; Example mapping to close the popup
nnoremap &lt;leader&gt;pc :call CloseReadonlyPopup()&lt;CR&gt;

&quot; Autocommand to close the popup when the buffer is closed.
autocmd BufUnload * call CloseReadonlyPopup()

#######################################################################################################
Processing file: output.txt
             _               _    _        _   
  ___  _   _| |_ _ __  _   _| |_ | |___  _| |_ 
 / _ \| | | | __| &#39;_ \| | | | __|| __\ \/ / __|
| (_) | |_| | |_| |_) | |_| | |_ | |_ &gt;  &lt;| |_ 
 \___/ \__,_|\__| .__/ \__,_|\__(_)__/_/\_\\__|
                |_|                            
Global
:h[elp] keyword - open help for keyword
:sav[eas] file - save file as
:clo[se] - close current pane
:ter[minal] - open a terminal window
K - open man page for word under the cursor
Tip Run vimtutor in a terminal to learn the first Vim commands.
Cursor movement
h - move cursor left
j - move cursor down
k - move cursor up
l - move cursor right
gj - move cursor down (multi-line text)
gk - move cursor up (multi-line text)
H - move to top of screen
M - move to middle of screen
L - move to bottom of screen
w - jump forwards to the start of a word
W - jump forwards to the start of a word (words can contain punctuation)
e - jump forwards to the end of a word
E - jump forwards to the end of a word (words can contain punctuation)
b - jump backwards to the start of a word
B - jump backwards to the start of a word (words can contain punctuation)
ge - jump backwards to the end of a word
gE - jump backwards to the end of a word (words can contain punctuation)
% - move cursor to matching character (default supported pairs: &#39;()&#39;, &#39;{}&#39;, &#39;[]&#39; 
- use :h matchpairs in vim for more info)
0 - jump to the start of the line
^ - jump to the first non-blank character of the line
$ - jump to the end of the line
g_ - jump to the last non-blank character of the line
gg - go to the first line of the document
G - go to the last line of the document
5gg or 5G - go to line 5
gd - move to local declaration
gD - move to global declaration
fx - jump to next occurrence of character x
tx - jump to before next occurrence of character x
Fx - jump to the previous occurrence of character x
Tx - jump to after previous occurrence of character x
; - repeat previous f, t, F or T movement
, - repeat previous f, t, F or T movement, backwards
} - jump to next paragraph (or function/block, when editing code)
{ - jump to previous paragraph (or function/block, when editing code)
zz - center cursor on screen
zt - position cursor on top of the screen
zb - position cursor on bottom of the screen
Ctrl + e - move screen down one line (without moving cursor)
Ctrl + y - move screen up one line (without moving cursor)
Ctrl + b - move screen up one page (cursor to last line)
Ctrl + f - move screen down one page (cursor to first line)
Ctrl + d - move cursor and screen down 1/2 page
Ctrl + u - move cursor and screen up 1/2 page
Insert mode - inserting/appending text
i - insert before the cursor
I - insert at the beginning of the line
a - insert (append) after the cursor
A - insert (append) at the end of the line
o - append (open) a new line below the current line
O - append (open) a new line above the current line
ea - insert (append) at the end of the word
Ctrl + h - delete the character before the cursor during insert mode
Ctrl + w - delete word before the cursor during insert mode
Ctrl + j - add a line break at the cursor position during insert mode
Ctrl + t - indent (move right) line one shiftwidth during insert mode
Ctrl + d - de-indent (move left) line one shiftwidth during insert mode
Ctrl + n - insert (auto-complete) next match before the cursor during insert mode
Ctrl + p - insert (auto-complete) previous match before the cursor during insert mode
Ctrl + rx - insert the contents of register x
Ctrl + ox - Temporarily enter normal mode to issue one normal-mode command x.
Esc or Ctrl + c - exit insert mode
Editing
r - replace a single character.
R - replace more than one character, until ESC is pressed.
J - join line below to the current one with one space in between
gJ - join line below to the current one without space in between
gwip - reflow paragraph
g~ - switch case up to motion
gu - change to lowercase up to motion
gU - change to uppercase up to motion
cc - change (replace) entire line
c$ or C - change (replace) to the end of the line
ciw - change (replace) entire word
cw or ce - change (replace) to the end of the word
s - delete character and substitute text (same as cl)
S - delete line and substitute text (same as cc)
xp - transpose two letters (delete and paste)
u - undo
U - restore (undo) last changed line
Ctrl + r - redo
. - repeat last command
Marking text (visual mode)
v - start visual mode, mark lines, then do a command (like y-yank)
V - start linewise visual mode
o - move to other end of marked area
Ctrl + v - start visual block mode
O - move to other corner of block
aw - mark a word
ab - a block with ()
aB - a block with {}
at - a block with &lt;&gt; tags
ib - inner block with ()
iB - inner block with {}
it - inner block with &lt;&gt; tags
Esc or Ctrl + c - exit visual mode
Visual commands
&gt; - shift text right
&lt; - shift text left
y - yank (copy) marked text
d - delete marked text
~ - switch case
u - change marked text to lowercase
U - change marked text to uppercase
Registers
:reg[isters] - show registers content
&quot;xy - yank into register x
&quot;xp - paste contents of register x
&quot;+y - yank into the system clipboard register
&quot;+p - paste from the system clipboard register
Tip Registers are being stored in ~/.viminfo, and will be loaded again on next restart of vim.
Special registers:
0 - last yank
&quot; - unnamed register, last delete or yank
% - current file name
# - alternate file name
* - clipboard contents (X11 primary)
+ - clipboard contents (X11 clipboard)
/ - last search pattern
: - last command-line
. - last inserted text
- - last small (less than a line) delete
= - expression register
_ - black hole register
Marks and positions
:marks - list of marks
ma - set current position for mark A
`a - jump to position of mark A
y`a - yank text to position of mark A
`0 - go to the position where Vim was previously exited
`&quot; - go to the position when last editing this file
`. - go to the position of the last change in this file
`` - go to the position before the last jump
:ju[mps] - list of jumps
Ctrl + i - go to newer position in jump list
Ctrl + o - go to older position in jump list
:changes - list of changes
g, - go to newer position in change list
g; - go to older position in change list
Ctrl + ] - jump to the tag under cursor
Tip To jump to a mark you can either use a backtick (`) or an apostrophe (&#39;).
Using an apostrophe jumps to the beginning (first non-blank) of the line holding the mark.
Macros
qa - record macro a
q - stop recording macro
@a - run macro a
@@ - rerun last run macro
Cut and paste
yy - yank (copy) a line
2yy - yank (copy) 2 lines
yw - yank (copy) the characters of the word from the cursor position to the start of the next word
yiw - yank (copy) word under the cursor
yaw - yank (copy) word under the cursor and the space after or before it
y$ or Y - yank (copy) to end of line
p - put (paste) the clipboard after cursor
P - put (paste) before cursor
gp - put (paste) the clipboard after cursor and leave cursor after the new text
gP - put (paste) before cursor and leave cursor after the new text
dd - delete (cut) a line
2dd - delete (cut) 2 lines
dw - delete (cut) the characters of the word from the cursor position to the start of the next word
diw - delete (cut) word under the cursor
daw - delete (cut) word under the cursor and the space after or before it
:3,5d - delete lines starting from 3 to 5
Tip You can also use the following characters to specify the range:
e.g.
:.,$d - From the current line to the end of the file
:.,1d - From the current line to the beginning of the file
:10,1d - From the 10th line to the beginning of the file
:g/{pattern}/d - delete all lines containing pattern
:g!/{pattern}/d - delete all lines not containing pattern
d$ or D - delete (cut) to the end of the line
x - delete (cut) character
Indent text
&gt;&gt; - indent (move right) line one shiftwidth
&lt;&lt; - de-indent (move left) line one shiftwidth
&gt;% - indent a block with () or {} (cursor on brace)
&lt;% - de-indent a block with () or {} (cursor on brace)
&gt;ib - indent inner block with ()
&gt;at - indent a block with &lt;&gt; tags
3== - re-indent 3 lines
=% - re-indent a block with () or {} (cursor on brace)
=iB - re-indent inner block with {}
gg=G - re-indent entire buffer
]p - paste and adjust indent to current line
Exiting
:w - write (save) the file, but don&#39;t exit
:w !sudo tee % - write out the current file using sudo
:wq or :x or ZZ - write (save) and quit
:q - quit (fails if there are unsaved changes)
:q! or ZQ - quit and throw away unsaved changes
:wqa - write (save) and quit on all tabs
Search and replace
/pattern - search for pattern
?pattern - search backward for pattern
\vpattern - &#39;very magic&#39; pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)
n - repeat search in same direction
N - repeat search in opposite direction
:%s/old/new/g - replace all old with new throughout file
:%s/old/new/gc - replace all old with new throughout file with confirmations
:noh[lsearch] - remove highlighting of search matches
Search in multiple files
:vim[grep] /pattern/ {`{file}`} - search for pattern in multiple files
e.g. :vim[grep] /foo/ **/*
:cn[ext] - jump to the next match
:cp[revious] - jump to the previous match
:cope[n] - open a window containing the list of matches
:ccl[ose] - close the quickfix window
Tabs
:tabnew or :tabnew {page.words.file} - open a file in a new tab
Ctrl + wT - move the current split window into its own tab
gt or :tabn[ext] - move to the next tab
gT or :tabp[revious] - move to the previous tab
#gt - move to tab number #
:tabm[ove] # - move current tab to the #th position (indexed from 0)
:tabc[lose] - close the current tab and all its windows
:tabo[nly] - close all tabs except for the current one
:tabdo command - run the command on all tabs (e.g. :tabdo q - closes all opened tabs)
Working with multiple files
:e[dit] file - edit a file in a new buffer
:bn[ext] - go to the next buffer
:bp[revious] - go to the previous buffer
:bd[elete] - delete a buffer (close a file)
:b[uffer]# - go to a buffer by index #
:b[uffer] file - go to a buffer by file
:ls or :buffers - list all open buffers
:sp[lit] file - open a file in a new buffer and split window
:vs[plit] file - open a file in a new buffer and vertically split window
:vert[ical] ba[ll] - edit all buffers as vertical windows
:tab ba[ll] - edit all buffers as tabs
Ctrl + ws - split window
Ctrl + wv - split window vertically
Ctrl + ww - switch windows
Ctrl + wq - quit a window
Ctrl + wx - exchange current window with next one
Ctrl + w= - make all windows equal height &amp; width
Ctrl + wh - move cursor to the left window (vertical split)
Ctrl + wl - move cursor to the right window (vertical split)
Ctrl + wj - move cursor to the window below (horizontal split)
Ctrl + wk - move cursor to the window above (horizontal split)
Ctrl + wH - make current window full height at far left (leftmost vertical window)
Ctrl + wL - make current window full height at far right (rightmost vertical window)
Ctrl + wJ - make current window full width at the very bottom (bottommost horizontal window)
Ctrl + wK - make current window full width at the very top (topmost horizontal window)
Diff
zf - manually define a fold up to motion
zd - delete fold under the cursor
za - toggle fold under the cursor
zo - open fold under the cursor
zc - close fold under the cursor
zr - reduce (open) all folds by one level
zm - fold more (close) all folds by one level
zi - toggle folding functionality
]c - jump to start of next change
[c - jump to start of previous change
do or :diffg[et] - obtain (get) difference (from other buffer)
dp or :diffpu[t] - put difference (to other buffer)
:diffthis - make current window part of diff
:dif[fupdate] - update differences
:diffo[ff] - switch off diff mode for current window

#######################################################################################################
Processing file: padomatic
                 _                       _   _      
 _ __   __ _  __| | ___  _ __ ___   __ _| |_(_) ___ 
| &#39;_ \ / _` |/ _` |/ _ \| &#39;_ ` _ \ / _` | __| |/ __|
| |_) | (_| | (_| | (_) | | | | | | (_| | |_| | (__ 
| .__/ \__,_|\__,_|\___/|_| |_| |_|\__,_|\__|_|\___|
|_|                                                 
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp1=/tmp/$$_$$
trap &#39;exit 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot; &quot;$Tmp1&quot;&#39; EXIT
rm -f &quot;$Tmp&quot;  &gt;/dev/null 2&gt;&amp;1
rm -f &quot;$Tmp1&quot;  &gt;/dev/null 2&gt;&amp;1
#================================================================
# paste -d&#39; &#39; file1 file2 &gt; output_file

source ~/bash.library

# Get the filename from the command-line argument
filename=&quot;$1&quot;

# Check if a filename is provided
if [ -z &quot;$filename&quot; ]; then
  echo &quot;Usage: $0 &lt;filename&gt;&quot;
  exit 1
fi

# Check if the file exists
if [ ! -f &quot;$filename&quot; ]; then
  echo &quot;Error: File &#39;$filename&#39; not found.&quot;
  exit 1
fi

backup_file  &quot;$filename&quot;   ~/BACKUPS

sed &#39;s/[[:space:]]*$//&#39; &quot;$filename&quot; &gt; $Tmp

# Find the longest line length
max_len=$(wc -L &quot;$Tmp&quot; | awk &#39;{print $1}&#39;)

# Calculate the padding length
padding_length=$((max_len + 1))

# Create a temporary file to store the padded content
temp_file=$(mktemp)

# Iterate through each line of the file and pad it
while IFS= read -r line; do
  printf &quot;%-${padding_length}s\n&quot; &quot;$line&quot; &gt;&gt; &quot;$temp_file&quot; # Pad to the right
done  &lt; &quot;$Tmp&quot;

# Replace the original file with the padded content
cat &quot;$temp_file&quot;  &gt;   &quot;$filename&quot;

# echo &quot;File &#39;$filename&#39; padded successfully.&quot;

#######################################################################################################
Processing file: rmLeadingWhiteSpace
                _                   _ _           __        ___     _ _       
 _ __ _ __ ___ | |    ___  __ _  __| (_)_ __   __ \ \      / / |__ (_) |_ ___ 
| &#39;__| &#39;_ ` _ \| |   / _ \/ _` |/ _` | | &#39;_ \ / _` \ \ /\ / /| &#39;_ \| | __/ _ \
| |  | | | | | | |__|  __/ (_| | (_| | | | | | (_| |\ V  V / | | | | | ||  __/
|_|  |_| |_| |_|_____\___|\__,_|\__,_|_|_| |_|\__, | \_/\_/  |_| |_|_|\__\___|
                                              |___/                           
 ____                       
/ ___| _ __   __ _  ___ ___ 
\___ \| &#39;_ \ / _` |/ __/ _ \
 ___) | |_) | (_| | (_|  __/
|____/| .__/ \__,_|\___\___|
      |_|                   
sed -i &#39;s/^[[:space:]]*//&#39; &quot;$1&quot;

#######################################################################################################
Processing file: template.html
 _                       _       _         _     _             _ 
| |_ ___ _ __ ___  _ __ | | __ _| |_ ___  | |__ | |_ _ __ ___ | |
| __/ _ \ &#39;_ ` _ \| &#39;_ \| |/ _` | __/ _ \ | &#39;_ \| __| &#39;_ ` _ \| |
| ||  __/ | | | | | |_) | | (_| | ||  __/_| | | | |_| | | | | | |
 \__\___|_| |_| |_| .__/|_|\__,_|\__\___(_)_| |_|\__|_| |_| |_|_|
                  |_|                                            
&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta name=&quot;date&quot; content=&#39;$date-meta$&#39;&gt;
    &lt;title&gt;$title$&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;Date: $date$&lt;/p&gt;
$body$
  &lt;/body&gt;
&lt;/html&gt;


#######################################################################################################
Processing file: tt
 _   _   
| |_| |_ 
| __| __|
| |_| |_ 
 \__|\__|
         
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap &#39;exit 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot; &quot;$Tmp0&quot; &quot;$Tmp1&quot; &quot;$Tmp2&quot; &quot;$Tmp3&quot;&#39; EXIT
rm -f &quot;$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3&quot;  &gt;/dev/null 2&gt;&amp;1;


egrep &quot;(function.*[(][)])|(Function-Args)&quot; bash.library |  \
      sed &#39;s/function //&#39; |                     \
      sed -e &#39;s/[ ]*{$//&#39; |                     \
      sed &#39;s/^[[:space:]]*//&#39; |                 \
      sed &#39;s/[[:space:]]*$//&#39; |                 \
      sed -e &#39;s/[#].*$//&#39;     |                 \
      gawk &#39;
      {
          if ( NR == 1 ) {
              prevline=$0
              next
          }
          else {
              if ( $0 ~ /local/) {
                  gsub(/local[ ]*/, &quot;&quot;, $0);
                  gsub(/=..../, &quot;&quot;, $0);
                  gsub(/;/, &quot;,&quot;, $0);
                  print prevline &quot;,&quot; $0
              }
              else {
                  prevline=$0
              }
          }
      }&#39; &gt; $Tmp


cat &quot;$Tmp&quot;














# source ~/bash.library
#   # Iterate through each line of the file and pad it
#   while IFS= read -r line; do
#     echo &quot;         1         2         3         4         5         6         7&quot;
#     echo &quot;1234567890123456789012345678901234567890123456789012345678901234567890&quot;
#     justify_line &quot;$line&quot; &quot;44&quot;
#   done &lt; &quot;vim.raw&quot;

#######################################################################################################
Processing file: update
                 _       _       
 _   _ _ __   __| | __ _| |_ ___ 
| | | | &#39;_ \ / _` |/ _` | __/ _ \
| |_| | |_) | (_| | (_| | ||  __/
 \__,_| .__/ \__,_|\__,_|\__\___|
      |_|                        
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap &#39;exit 0&#39; INT HUP QUIT TERM ALRM USR1
trap &#39;rm -f &quot;$Tmp&quot; &quot;$Tmp0&quot; &quot;$Tmp1&quot; &quot;$Tmp2&quot; &quot;$Tmp3&quot;&#39; EXIT
rm -f &quot;$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3&quot;  &gt;/dev/null 2&gt;&amp;1;

source ~/bash.library

UPDATE=&quot;NO&quot;
while getopts &quot;ruls&quot; arg
do
    case $arg in
        r) UPDATE=&quot;REMOTE&quot;
           ;;
        u) UPDATE=&quot;REMOTE&quot;
           ;;
        l) UPDATE=&quot;LOCAL&quot;
           ;;
        s) UPDATE=&quot;STATUS&quot;
           ;;
    esac
done
shift $(($OPTIND - 1))

if [ &quot;$UPDATE&quot; == &quot;YES&quot; ]; then                                                                                               
    RETVAL=&quot;YES&quot;                                                                                                             
else                                                                                                                         
    RETVAL=&quot;NO&quot;                                                                                                              
fi                                                                                                                           

create_markdown_table() {
  local input_file=&quot;$1&quot;

  # Check if the input file exists
  if [[ ! -f &quot;$input_file&quot; ]]; then
    echo &quot;Error: Input file &#39;$input_file&#39; not found.&quot;
    return 1
  fi

  # Read lines from the file and create table rows
  local line_count=0
  local row=&quot;&quot;
  local first_row=1

  while IFS= read -r line; do
    if [[ $line_count -eq 0 ]]; then
      if [[ $first_row -eq 1 ]]; then
          #echo &quot;| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |&quot;
          echo &quot;|    A     |    B     |    C     |    D     |    E     |&quot;
          echo &quot;|----------|----------|----------|----------|----------|&quot;
          first_row=0
      fi
    fi

    row+=&quot;| $line &quot;

    line_count=$((line_count + 1))

    if [[ $line_count -eq 5 ]]; then
      echo &quot;$row|&quot;
      row=&quot;&quot;
      line_count=0
    fi
  done &lt; &quot;$input_file&quot;

  # Handle remaining lines if the total line count is not a multiple of 5
  if [[ $line_count -gt 0 ]]; then
    for ((i = line_count; i &lt; 5; i++)); do
        row+=&quot;|  &quot;
    done
    echo &quot;$row|&quot;
  fi
}

# Example usage (if you want to test it with a file named &quot;input.txt&quot;):
# create_markdown_table &quot;input.txt&quot;

D=`date`

FILE=&quot;./.vimrc&quot;
if [ $(isSameHash &quot;$FILE&quot;) == &quot;0&quot; ]; then

    grep -v DATEOMATIC &quot;$FILE&quot; | grep -v HASHOMATIC &gt; $Tmp
    IHASH=$(md5sum &quot;$Tmp&quot; | awk &#39;{print $1}&#39;)
    echo &quot;\&quot; *********************************************************DATEOMATIC: $D&quot;      &gt; $Tmp1
    echo &quot;\&quot; *********************************************************HASHOMATIC: $IHASH&quot; &gt;&gt; $Tmp1
    cat $Tmp  &gt;&gt; $Tmp1
    cat $Tmp1  &gt; &quot;$FILE&quot;
    git add &quot;$FILE&quot;
fi


FILE=&quot;./.bashrc&quot;
if [ $(isSameHash &quot;$FILE&quot;) == &quot;0&quot; ]; then

    grep -v DATEOMATIC &quot;$FILE&quot; | grep -v HASHOMATIC &gt; $Tmp
    IHASH=$(md5sum &quot;$Tmp&quot; | awk &#39;{print $1}&#39;)
    echo &quot;# *********************************************************DATEOMATIC: $D&quot;      &gt; $Tmp1
    echo &quot;# *********************************************************HASHOMATIC: $IHASH&quot; &gt;&gt; $Tmp1
    cat $Tmp  &gt;&gt; $Tmp1
    cat $Tmp1  &gt; &quot;$FILE&quot;
    git add &quot;$FILE&quot;
fi


FILE=&quot;./bashrc.shared&quot;
if [ $(isSameHash &quot;$FILE&quot;) == &quot;0&quot; ]; then

    grep -v DATEOMATIC &quot;$FILE&quot; | grep -v HASHOMATIC &gt; $Tmp
    IHASH=$(md5sum &quot;$Tmp&quot; | awk &#39;{print $1}&#39;)
    echo &quot;# *********************************************************DATEOMATIC: $D&quot;      &gt; $Tmp1
    echo &quot;# *********************************************************HASHOMATIC: $IHASH&quot; &gt;&gt; $Tmp1
    cat $Tmp  &gt;&gt; $Tmp1
    cat $Tmp1  &gt; &quot;$FILE&quot;
    git add &quot;$FILE&quot;
fi

FILE=&quot;./bash.library&quot;
if [ $(isSameHash &quot;$FILE&quot;) == &quot;0&quot; ]; then

    grep -v DATEOMATIC &quot;$FILE&quot; | grep -v HASHOMATIC &gt; $Tmp
    IHASH=$(md5sum &quot;$Tmp&quot; | awk &#39;{print $1}&#39;)
    echo &quot;# *********************************************************DATEOMATIC: $D&quot;      &gt; $Tmp1
    echo &quot;# *********************************************************HASHOMATIC: $IHASH&quot; &gt;&gt; $Tmp1
    cat $Tmp  &gt;&gt; $Tmp1
    cat $Tmp1  &gt; &quot;$FILE&quot;
    git add &quot;$FILE&quot;
fi

FILE=&quot;./gawk.library&quot;
if [ $(isSameHash &quot;$FILE&quot;) == &quot;0&quot; ]; then

    grep -v DATEOMATIC &quot;$FILE&quot; | grep -v HASHOMATIC &gt; $Tmp
    IHASH=$(md5sum &quot;$Tmp&quot; | awk &#39;{print $1}&#39;)
    echo &quot;# *********************************************************DATEOMATIC: $D&quot;      &gt; $Tmp1
    echo &quot;# *********************************************************HASHOMATIC: $IHASH&quot; &gt;&gt; $Tmp1
    cat $Tmp  &gt;&gt; $Tmp1
    cat $Tmp1  &gt; &quot;$FILE&quot;
    git add &quot;$FILE&quot;
fi

git ls-files | gawk &#39;
BEGIN {
    BASE=&quot;https://raw.githubusercontent.com/archernar/basics/refs/heads/master/&quot;
}
{
    print BASE $0
}&#39; &gt; get.raw
git add get.raw

rm -f &quot;$Tmp&quot;  &gt;/dev/null 2&gt;&amp;1;



grep bash get.raw | gawk &#39;{print &quot;wget &quot; $0}&#39; &gt; getme
git add getme

#cat get.raw |sort|uniq| gawk &#39; {n=split($0,A,&quot;/&quot;);print &quot;[&quot; A[n] &quot;](&quot; $0 &quot;)&quot;}&#39; &gt; $Tmp
cat get.raw |sort|uniq  &gt; $Tmp
create_markdown_table4 &quot;$Tmp&quot; &quot;MAKELINKS&quot;   &gt; README.md
echo &quot;&quot;     &gt;&gt; README.md
echo &quot;&quot;     &gt;&gt; README.md

ls *omatic &gt; $Tmp
create_markdown_table4 &quot;$Tmp&quot;  &gt;&gt; README.md
echo &quot;&quot;     &gt;&gt; README.md
echo &quot;&quot;     &gt;&gt; README.md

echo &quot;## bash.library includes&quot;     &gt;&gt; README.md
echo &quot;&quot;     &gt;&gt; README.md

# grep function bash.library | grep &quot;()&quot; | sed &#39;s/function //&#39; | sed -e &#39;s/[ ]*{$//&#39; &gt; $Tmp
egrep &quot;(function.*[(][)])|(Function-Args)&quot; bash.library | grep &quot;()&quot; | sed &#39;s/function //&#39; | sed -e &#39;s/[ ]*{$//&#39; &gt; $Tmp

create_markdown_table4 &quot;$Tmp&quot;  &gt;&gt; README.md
echo &quot;&quot;     &gt;&gt; README.md
echo &quot;&quot;     &gt;&gt; README.md

./listing   &gt;&gt; README.md
pandoc --standalone --template template.html README.md &gt; local.html
git add README.md

rm -f zed zzed zerd qed qqed fed ffed xx yy xxx yyy moe

if [ &quot;$UPDATE&quot; == &quot;LOCAL&quot; ]; then                                                                                               
    git commit  -m &quot;Update&quot;
    git status
fi
if [ &quot;$UPDATE&quot; == &quot;REMOTE&quot; ]; then                                                                                               
    git commit  -m &quot;Update&quot;
    git push -u origin master
    git status
fi
if [ &quot;$UPDATE&quot; == &quot;STATUS&quot; ]; then                                                                                               
    git status
fi







# FHASH=`cat ./.vimrc | gawk  &#39; /HASHOMATIC/ {n=split($0,A,&quot; &quot;);h=A[n];gsub(/ +$/, &quot;&quot;, h);print h;}&#39;`

#######################################################################################################
Processing file: vim.raw
       _                                
__   _(_)_ __ ___    _ __ __ ___      __
\ \ / / | &#39;_ ` _ \  | &#39;__/ _` \ \ /\ / /
 \ V /| | | | | | |_| | | (_| |\ V  V / 
  \_/ |_|_| |_| |_(_)_|  \__,_| \_/\_/  
                                        
Global

:h[elp] keyword - open help for keyword
:sav[eas] file - save file as
:clo[se] - close current pane
:ter[minal] - open a terminal window
K - open man page for word under the cursor
Tip Run vimtutor in a terminal to learn the first Vim commands.

Cursor movement

h - move cursor left
j - move cursor down
k - move cursor up
l - move cursor right
gj - move cursor down (multi-line text)
gk - move cursor up (multi-line text)
H - move to top of screen
M - move to middle of screen
L - move to bottom of screen
w - jump forwards to the start of a word
W - jump forwards to the start of a word (words can contain punctuation)
e - jump forwards to the end of a word
E - jump forwards to the end of a word (words can contain punctuation)
b - jump backwards to the start of a word
B - jump backwards to the start of a word (words can contain punctuation)
ge - jump backwards to the end of a word
gE - jump backwards to the end of a word (words can contain punctuation)
% - move cursor to matching character (default supported pairs: &#39;()&#39;, &#39;{}&#39;, &#39;[]&#39; 
- use :h matchpairs in vim for more info)
0 - jump to the start of the line
^ - jump to the first non-blank character of the line
$ - jump to the end of the line
g_ - jump to the last non-blank character of the line
gg - go to the first line of the document
G - go to the last line of the document
5gg or 5G - go to line 5
gd - move to local declaration
gD - move to global declaration
fx - jump to next occurrence of character x
tx - jump to before next occurrence of character x
Fx - jump to the previous occurrence of character x
Tx - jump to after previous occurrence of character x
; - repeat previous f, t, F or T movement
, - repeat previous f, t, F or T movement, backwards
} - jump to next paragraph (or function/block, when editing code)
{ - jump to previous paragraph (or function/block, when editing code)
zz - center cursor on screen
zt - position cursor on top of the screen
zb - position cursor on bottom of the screen
Ctrl + e - move screen down one line (without moving cursor)
Ctrl + y - move screen up one line (without moving cursor)
Ctrl + b - move screen up one page (cursor to last line)
Ctrl + f - move screen down one page (cursor to first line)
Ctrl + d - move cursor and screen down 1/2 page
Ctrl + u - move cursor and screen up 1/2 page

Insert mode - inserting/appending text

i - insert before the cursor
I - insert at the beginning of the line
a - insert (append) after the cursor
A - insert (append) at the end of the line
o - append (open) a new line below the current line
O - append (open) a new line above the current line
ea - insert (append) at the end of the word
Ctrl + h - delete the character before the cursor during insert mode
Ctrl + w - delete word before the cursor during insert mode
Ctrl + j - add a line break at the cursor position during insert mode
Ctrl + t - indent (move right) line one shiftwidth during insert mode
Ctrl + d - de-indent (move left) line one shiftwidth during insert mode
Ctrl + n - insert (auto-complete) next match before the cursor during insert mode
Ctrl + p - insert (auto-complete) previous match before the cursor during insert mode
Ctrl + rx - insert the contents of register x
Ctrl + ox - Temporarily enter normal mode to issue one normal-mode command x.
Esc or Ctrl + c - exit insert mode

Editing

r - replace a single character.
R - replace more than one character, until ESC is pressed.
J - join line below to the current one with one space in between
gJ - join line below to the current one without space in between
gwip - reflow paragraph
g~ - switch case up to motion
gu - change to lowercase up to motion
gU - change to uppercase up to motion
cc - change (replace) entire line
c$ or C - change (replace) to the end of the line
ciw - change (replace) entire word
cw or ce - change (replace) to the end of the word
s - delete character and substitute text (same as cl)
S - delete line and substitute text (same as cc)
xp - transpose two letters (delete and paste)
u - undo
U - restore (undo) last changed line
Ctrl + r - redo
. - repeat last command

Marking text (visual mode)

v - start visual mode, mark lines, then do a command (like y-yank)
V - start linewise visual mode
o - move to other end of marked area
Ctrl + v - start visual block mode
O - move to other corner of block
aw - mark a word
ab - a block with ()
aB - a block with {}
at - a block with &lt;&gt; tags
ib - inner block with ()
iB - inner block with {}
it - inner block with &lt;&gt; tags
Esc or Ctrl + c - exit visual mode

Visual commands

&gt; - shift text right
&lt; - shift text left
y - yank (copy) marked text
d - delete marked text
~ - switch case
u - change marked text to lowercase
U - change marked text to uppercase

Registers

:reg[isters] - show registers content
&quot;xy - yank into register x
&quot;xp - paste contents of register x
&quot;+y - yank into the system clipboard register
&quot;+p - paste from the system clipboard register
Tip Registers are being stored in ~/.viminfo, and will be loaded again on next restart of vim.

Special registers:

0 - last yank
&quot; - unnamed register, last delete or yank
% - current file name
# - alternate file name
* - clipboard contents (X11 primary)
+ - clipboard contents (X11 clipboard)
/ - last search pattern
: - last command-line
. - last inserted text
- - last small (less than a line) delete
= - expression register
_ - black hole register

Marks and positions

:marks - list of marks
ma - set current position for mark A
`a - jump to position of mark A
y`a - yank text to position of mark A
`0 - go to the position where Vim was previously exited
`&quot; - go to the position when last editing this file
`. - go to the position of the last change in this file
`` - go to the position before the last jump
:ju[mps] - list of jumps
Ctrl + i - go to newer position in jump list
Ctrl + o - go to older position in jump list
:changes - list of changes
g, - go to newer position in change list
g; - go to older position in change list
Ctrl + ] - jump to the tag under cursor
Tip To jump to a mark you can either use a backtick (`) or an apostrophe (&#39;).
Using an apostrophe jumps to the beginning (first non-blank) of the line holding the mark.

Macros

qa - record macro a
q - stop recording macro
@a - run macro a
@@ - rerun last run macro

Cut and paste

yy - yank (copy) a line
2yy - yank (copy) 2 lines
yw - yank (copy) the characters of the word from the cursor position to the start of the next word
yiw - yank (copy) word under the cursor
yaw - yank (copy) word under the cursor and the space after or before it
y$ or Y - yank (copy) to end of line
p - put (paste) the clipboard after cursor
P - put (paste) before cursor
gp - put (paste) the clipboard after cursor and leave cursor after the new text
gP - put (paste) before cursor and leave cursor after the new text
dd - delete (cut) a line
2dd - delete (cut) 2 lines
dw - delete (cut) the characters of the word from the cursor position to the start of the next word
diw - delete (cut) word under the cursor
daw - delete (cut) word under the cursor and the space after or before it
:3,5d - delete lines starting from 3 to 5
Tip You can also use the following characters to specify the range:
e.g.
:.,$d - From the current line to the end of the file
:.,1d - From the current line to the beginning of the file
:10,1d - From the 10th line to the beginning of the file
:g/{pattern}/d - delete all lines containing pattern
:g!/{pattern}/d - delete all lines not containing pattern
d$ or D - delete (cut) to the end of the line
x - delete (cut) character

Indent text

&gt;&gt; - indent (move right) line one shiftwidth
&lt;&lt; - de-indent (move left) line one shiftwidth
&gt;% - indent a block with () or {} (cursor on brace)
&lt;% - de-indent a block with () or {} (cursor on brace)
&gt;ib - indent inner block with ()
&gt;at - indent a block with &lt;&gt; tags
3== - re-indent 3 lines
=% - re-indent a block with () or {} (cursor on brace)
=iB - re-indent inner block with {}
gg=G - re-indent entire buffer
]p - paste and adjust indent to current line

Exiting

:w - write (save) the file, but don&#39;t exit
:w !sudo tee % - write out the current file using sudo
:wq or :x or ZZ - write (save) and quit
:q - quit (fails if there are unsaved changes)
:q! or ZQ - quit and throw away unsaved changes
:wqa - write (save) and quit on all tabs

Search and replace

/pattern - search for pattern
?pattern - search backward for pattern
\vpattern - &#39;very magic&#39; pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)
n - repeat search in same direction
N - repeat search in opposite direction
:%s/old/new/g - replace all old with new throughout file
:%s/old/new/gc - replace all old with new throughout file with confirmations
:noh[lsearch] - remove highlighting of search matches

Search in multiple files

:vim[grep] /pattern/ {`{file}`} - search for pattern in multiple files
e.g. :vim[grep] /foo/ **/*
:cn[ext] - jump to the next match
:cp[revious] - jump to the previous match
:cope[n] - open a window containing the list of matches
:ccl[ose] - close the quickfix window

Tabs

:tabnew or :tabnew {page.words.file} - open a file in a new tab
Ctrl + wT - move the current split window into its own tab
gt or :tabn[ext] - move to the next tab
gT or :tabp[revious] - move to the previous tab
#gt - move to tab number #
:tabm[ove] # - move current tab to the #th position (indexed from 0)
:tabc[lose] - close the current tab and all its windows
:tabo[nly] - close all tabs except for the current one
:tabdo command - run the command on all tabs (e.g. :tabdo q - closes all opened tabs)

Working with multiple files

:e[dit] file - edit a file in a new buffer
:bn[ext] - go to the next buffer
:bp[revious] - go to the previous buffer
:bd[elete] - delete a buffer (close a file)
:b[uffer]# - go to a buffer by index #
:b[uffer] file - go to a buffer by file
:ls or :buffers - list all open buffers
:sp[lit] file - open a file in a new buffer and split window
:vs[plit] file - open a file in a new buffer and vertically split window
:vert[ical] ba[ll] - edit all buffers as vertical windows
:tab ba[ll] - edit all buffers as tabs
Ctrl + ws - split window
Ctrl + wv - split window vertically
Ctrl + ww - switch windows
Ctrl + wq - quit a window
Ctrl + wx - exchange current window with next one
Ctrl + w= - make all windows equal height &amp; width
Ctrl + wh - move cursor to the left window (vertical split)
Ctrl + wl - move cursor to the right window (vertical split)
Ctrl + wj - move cursor to the window below (horizontal split)
Ctrl + wk - move cursor to the window above (horizontal split)
Ctrl + wH - make current window full height at far left (leftmost vertical window)
Ctrl + wL - make current window full height at far right (rightmost vertical window)
Ctrl + wJ - make current window full width at the very bottom (bottommost horizontal window)
Ctrl + wK - make current window full width at the very top (topmost horizontal window)

Diff

zf - manually define a fold up to motion
zd - delete fold under the cursor
za - toggle fold under the cursor
zo - open fold under the cursor
zc - close fold under the cursor
zr - reduce (open) all folds by one level
zm - fold more (close) all folds by one level
zi - toggle folding functionality
]c - jump to start of next change
[c - jump to start of previous change
do or :diffg[et] - obtain (get) difference (from other buffer)
dp or :diffpu[t] - put difference (to other buffer)
:diffthis - make current window part of diff
:dif[fupdate] - update differences
:diffo[ff] - switch off diff mode for current window

#######################################################################################################
Processing file: vim.txt
       _            _        _   
__   _(_)_ __ ___  | |___  _| |_ 
\ \ / / | &#39;_ ` _ \ | __\ \/ / __|
 \ V /| | | | | | || |_ &gt;  &lt;| |_ 
  \_/ |_|_| |_| |_(_)__/_/\_\\__|
                                 
Global

    :h[elp] keyword - open help for keyword
    :sav[eas] file - save file as
    :clo[se] - close current pane
    :ter[minal] - open a terminal window
    K - open man page for word under the cursor
    Tip Run vimtutor in a terminal to learn the first Vim commands.

Cursor movement

    h - move cursor left
    j - move cursor down
    k - move cursor up
    l - move cursor right
    gj - move cursor down (multi-line text)
    gk - move cursor up (multi-line text)
    H - move to top of screen
    M - move to middle of screen
    L - move to bottom of screen
    w - jump forwards to the start of a word
    W - jump forwards to the start of a word (words can contain punctuation)
    e - jump forwards to the end of a word
    E - jump forwards to the end of a word (words can contain punctuation)
    b - jump backwards to the start of a word
    B - jump backwards to the start of a word (words can contain punctuation)
    ge - jump backwards to the end of a word
    gE - jump backwards to the end of a word (words can contain punctuation)
    % - move cursor to matching character (default supported pairs: &#39;()&#39;, &#39;{}&#39;, &#39;[]&#39; 
      - use :h matchpairs in vim for more info)
    0 - jump to the start of the line
    ^ - jump to the first non-blank character of the line
    $ - jump to the end of the line
    g_ - jump to the last non-blank character of the line
    gg - go to the first line of the document
    G - go to the last line of the document
    5gg or 5G - go to line 5
    gd - move to local declaration
    gD - move to global declaration
    fx - jump to next occurrence of character x
    tx - jump to before next occurrence of character x
    Fx - jump to the previous occurrence of character x
    Tx - jump to after previous occurrence of character x
    ; - repeat previous f, t, F or T movement
    , - repeat previous f, t, F or T movement, backwards
    } - jump to next paragraph (or function/block, when editing code)
    { - jump to previous paragraph (or function/block, when editing code)
    zz - center cursor on screen
    zt - position cursor on top of the screen
    zb - position cursor on bottom of the screen
    Ctrl + e - move screen down one line (without moving cursor)
    Ctrl + y - move screen up one line (without moving cursor)
    Ctrl + b - move screen up one page (cursor to last line)
    Ctrl + f - move screen down one page (cursor to first line)
    Ctrl + d - move cursor and screen down 1/2 page
    Ctrl + u - move cursor and screen up 1/2 page

Insert mode - inserting/appending text

    i - insert before the cursor
    I - insert at the beginning of the line
    a - insert (append) after the cursor
    A - insert (append) at the end of the line
    o - append (open) a new line below the current line
    O - append (open) a new line above the current line
    ea - insert (append) at the end of the word
    Ctrl + h - delete the character before the cursor during insert mode
    Ctrl + w - delete word before the cursor during insert mode
    Ctrl + j - add a line break at the cursor position during insert mode
    Ctrl + t - indent (move right) line one shiftwidth during insert mode
    Ctrl + d - de-indent (move left) line one shiftwidth during insert mode
    Ctrl + n - insert (auto-complete) next match before the cursor during insert mode
    Ctrl + p - insert (auto-complete) previous match before the cursor during insert mode
    Ctrl + rx - insert the contents of register x
    Ctrl + ox - Temporarily enter normal mode to issue one normal-mode command x.
    Esc or Ctrl + c - exit insert mode

Editing

    r - replace a single character.
    R - replace more than one character, until ESC is pressed.
    J - join line below to the current one with one space in between
    gJ - join line below to the current one without space in between
    gwip - reflow paragraph
    g~ - switch case up to motion
    gu - change to lowercase up to motion
    gU - change to uppercase up to motion
    cc - change (replace) entire line
    c$ or C - change (replace) to the end of the line
    ciw - change (replace) entire word
    cw or ce - change (replace) to the end of the word
    s - delete character and substitute text (same as cl)
    S - delete line and substitute text (same as cc)
    xp - transpose two letters (delete and paste)
    u - undo
    U - restore (undo) last changed line
    Ctrl + r - redo
    . - repeat last command

Marking text (visual mode)

    v - start visual mode, mark lines, then do a command (like y-yank)
    V - start linewise visual mode
    o - move to other end of marked area
    Ctrl + v - start visual block mode
    O - move to other corner of block
    aw - mark a word
    ab - a block with ()
    aB - a block with {}
    at - a block with &lt;&gt; tags
    ib - inner block with ()
    iB - inner block with {}
    it - inner block with &lt;&gt; tags
    Esc or Ctrl + c - exit visual mode

Visual commands

    &gt; - shift text right
    &lt; - shift text left
    y - yank (copy) marked text
    d - delete marked text
    ~ - switch case
    u - change marked text to lowercase
    U - change marked text to uppercase

Registers

    :reg[isters] - show registers content
    &quot;xy - yank into register x
    &quot;xp - paste contents of register x
    &quot;+y - yank into the system clipboard register
    &quot;+p - paste from the system clipboard register
    Tip Registers are being stored in ~/.viminfo, and will be loaded again on next restart of vim.

Special registers:

    0 - last yank
    &quot; - unnamed register, last delete or yank
    % - current file name
    # - alternate file name
    * - clipboard contents (X11 primary)
    + - clipboard contents (X11 clipboard)
    / - last search pattern
    : - last command-line
    . - last inserted text
    - - last small (less than a line) delete
    = - expression register
    _ - black hole register

Marks and positions

    :marks - list of marks
    ma - set current position for mark A
    `a - jump to position of mark A
    y`a - yank text to position of mark A
    `0 - go to the position where Vim was previously exited
    `&quot; - go to the position when last editing this file
    `. - go to the position of the last change in this file
    `` - go to the position before the last jump
    :ju[mps] - list of jumps
    Ctrl + i - go to newer position in jump list
    Ctrl + o - go to older position in jump list
    :changes - list of changes
    g, - go to newer position in change list
    g; - go to older position in change list
    Ctrl + ] - jump to the tag under cursor
    Tip To jump to a mark you can either use a backtick (`) or an apostrophe (&#39;).
    Using an apostrophe jumps to the beginning (first non-blank) of the line holding the mark.

Macros

    qa - record macro a
    q - stop recording macro
    @a - run macro a
    @@ - rerun last run macro

Cut and paste

    yy - yank (copy) a line
    2yy - yank (copy) 2 lines
    yw - yank (copy) the characters of the word from the cursor position to the start of the next word
    yiw - yank (copy) word under the cursor
    yaw - yank (copy) word under the cursor and the space after or before it
    y$ or Y - yank (copy) to end of line
    p - put (paste) the clipboard after cursor
    P - put (paste) before cursor
    gp - put (paste) the clipboard after cursor and leave cursor after the new text
    gP - put (paste) before cursor and leave cursor after the new text
    dd - delete (cut) a line
    2dd - delete (cut) 2 lines
    dw - delete (cut) the characters of the word from the cursor position to the start of the next word
    diw - delete (cut) word under the cursor
    daw - delete (cut) word under the cursor and the space after or before it
    :3,5d - delete lines starting from 3 to 5
    Tip You can also use the following characters to specify the range:
    e.g.
        :.,$d - From the current line to the end of the file
        :.,1d - From the current line to the beginning of the file
        :10,1d - From the 10th line to the beginning of the file
    :g/{pattern}/d - delete all lines containing pattern
    :g!/{pattern}/d - delete all lines not containing pattern
    d$ or D - delete (cut) to the end of the line
    x - delete (cut) character

Indent text

    &gt;&gt; - indent (move right) line one shiftwidth
    &lt;&lt; - de-indent (move left) line one shiftwidth
    &gt;% - indent a block with () or {} (cursor on brace)
    &lt;% - de-indent a block with () or {} (cursor on brace)
    &gt;ib - indent inner block with ()
    &gt;at - indent a block with &lt;&gt; tags
    3== - re-indent 3 lines
    =% - re-indent a block with () or {} (cursor on brace)
    =iB - re-indent inner block with {}
    gg=G - re-indent entire buffer
    ]p - paste and adjust indent to current line

Exiting

    :w - write (save) the file, but don&#39;t exit
    :w !sudo tee % - write out the current file using sudo
    :wq or :x or ZZ - write (save) and quit
    :q - quit (fails if there are unsaved changes)
    :q! or ZQ - quit and throw away unsaved changes
    :wqa - write (save) and quit on all tabs

Search and replace

    /pattern - search for pattern
    ?pattern - search backward for pattern
    \vpattern - &#39;very magic&#39; pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)
    n - repeat search in same direction
    N - repeat search in opposite direction
    :%s/old/new/g - replace all old with new throughout file
    :%s/old/new/gc - replace all old with new throughout file with confirmations
    :noh[lsearch] - remove highlighting of search matches

Search in multiple files

    :vim[grep] /pattern/ {`{file}`} - search for pattern in multiple files
    e.g. :vim[grep] /foo/ **/*
        :cn[ext] - jump to the next match
        :cp[revious] - jump to the previous match
        :cope[n] - open a window containing the list of matches
        :ccl[ose] - close the quickfix window

Tabs

    :tabnew or :tabnew {page.words.file} - open a file in a new tab
    Ctrl + wT - move the current split window into its own tab
    gt or :tabn[ext] - move to the next tab
    gT or :tabp[revious] - move to the previous tab
    #gt - move to tab number #
    :tabm[ove] # - move current tab to the #th position (indexed from 0)
    :tabc[lose] - close the current tab and all its windows
    :tabo[nly] - close all tabs except for the current one
    :tabdo command - run the command on all tabs (e.g. :tabdo q - closes all opened tabs)

Working with multiple files

    :e[dit] file - edit a file in a new buffer
    :bn[ext] - go to the next buffer
    :bp[revious] - go to the previous buffer
    :bd[elete] - delete a buffer (close a file)
    :b[uffer]# - go to a buffer by index #
    :b[uffer] file - go to a buffer by file
    :ls or :buffers - list all open buffers
    :sp[lit] file - open a file in a new buffer and split window
    :vs[plit] file - open a file in a new buffer and vertically split window
    :vert[ical] ba[ll] - edit all buffers as vertical windows
    :tab ba[ll] - edit all buffers as tabs
    Ctrl + ws - split window
    Ctrl + wv - split window vertically
    Ctrl + ww - switch windows
    Ctrl + wq - quit a window
    Ctrl + wx - exchange current window with next one
    Ctrl + w= - make all windows equal height &amp; width
    Ctrl + wh - move cursor to the left window (vertical split)
    Ctrl + wl - move cursor to the right window (vertical split)
    Ctrl + wj - move cursor to the window below (horizontal split)
    Ctrl + wk - move cursor to the window above (horizontal split)
    Ctrl + wH - make current window full height at far left (leftmost vertical window)
    Ctrl + wL - make current window full height at far right (rightmost vertical window)
    Ctrl + wJ - make current window full width at the very bottom (bottommost horizontal window)
    Ctrl + wK - make current window full width at the very top (topmost horizontal window)

Diff

    zf - manually define a fold up to motion
    zd - delete fold under the cursor
    za - toggle fold under the cursor
    zo - open fold under the cursor
    zc - close fold under the cursor
    zr - reduce (open) all folds by one level
    zm - fold more (close) all folds by one level
    zi - toggle folding functionality
    ]c - jump to start of next change
    [c - jump to start of previous change
    do or :diffg[et] - obtain (get) difference (from other buffer)
    dp or :diffpu[t] - put difference (to other buffer)
    :diffthis - make current window part of diff
    :dif[fupdate] - update differences
    :diffo[ff] - switch off diff mode for current window</code></pre>
  </body>
</html>

#######################################################################################################
Processing file: make
                 _        
 _ __ ___   __ _| | _____ 
| '_ ` _ \ / _` | |/ / _ \
| | | | | | (_| |   <  __/
|_| |_| |_|\__,_|_|\_\___|
                          
echo "Copy .vimrc to ~"
cp .vimrc ~
echo "Copy .bashrc to ~"
cp .bashrc ~
echo "Copy bashrc.shared to ~"
cp bashrc.shared ~
ls -l

#######################################################################################################
Processing file: markdown.css
                      _       _                                   
 _ __ ___   __ _ _ __| | ____| | _____      ___ __    ___ ___ ___ 
| '_ ` _ \ / _` | '__| |/ / _` |/ _ \ \ /\ / / '_ \  / __/ __/ __|
| | | | | | (_| | |  |   < (_| | (_) \ V  V /| | | || (__\__ \__ \
|_| |_| |_|\__,_|_|  |_|\_\__,_|\___/ \_/\_/ |_| |_(_)___|___/___/
                                                                  
/* dark */
.markdown-body {
  color-scheme: dark;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: #f0f6fc;
  background-color: #0d1117;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}

.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body h1:hover .anchor .octicon-link:before,
.markdown-body h2:hover .anchor .octicon-link:before,
.markdown-body h3:hover .anchor .octicon-link:before,
.markdown-body h4:hover .anchor .octicon-link:before,
.markdown-body h5:hover .anchor .octicon-link:before,
.markdown-body h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.markdown-body details,
.markdown-body figcaption,
.markdown-body figure {
  display: block;
}

.markdown-body summary {
  display: list-item;
}

.markdown-body [hidden] {
  display: none !important;
}

.markdown-body a {
  background-color: transparent;
  color: #4493f8;
  text-decoration: none;
}

.markdown-body abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

.markdown-body b,
.markdown-body strong {
  font-weight: 600;
}

.markdown-body dfn {
  font-style: italic;
}

.markdown-body h1 {
  margin: .67em 0;
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 1px solid #3d444db3;
}

.markdown-body mark {
  background-color: #bb800926;
  color: #f0f6fc;
}

.markdown-body small {
  font-size: 90%;
}

.markdown-body sub,
.markdown-body sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.markdown-body sub {
  bottom: -0.25em;
}

.markdown-body sup {
  top: -0.5em;
}

.markdown-body img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre,
.markdown-body samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body figure {
  margin: 1em 2.5rem;
}

.markdown-body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid #3d444db3;
  height: .25em;
  padding: 0;
  margin: 1.5rem 0;
  background-color: #3d444d;
  border: 0;
}

.markdown-body input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body [type=button],
.markdown-body [type=reset],
.markdown-body [type=submit] {
  -webkit-appearance: button;
  appearance: button;
}

.markdown-body [type=checkbox],
.markdown-body [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body [type=number]::-webkit-inner-spin-button,
.markdown-body [type=number]::-webkit-outer-spin-button {
  height: auto;
}

.markdown-body [type=search]::-webkit-search-cancel-button,
.markdown-body [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ::placeholder {
  color: #9198a1;
  opacity: 1;
}

.markdown-body hr::before {
  display: table;
  content: "";
}

.markdown-body hr::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
  font-variant: tabular-nums;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body a:focus,
.markdown-body [role=button]:focus,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=checkbox]:focus {
  outline: 2px solid #1f6feb;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:focus:not(:focus-visible),
.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body input[type=radio]:focus:not(:focus-visible),
.markdown-body input[type=checkbox]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.markdown-body a:focus-visible,
.markdown-body [role=button]:focus-visible,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus-visible {
  outline: 2px solid #1f6feb;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:not([class]):focus,
.markdown-body a:not([class]):focus-visible,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus,
.markdown-body input[type=checkbox]:focus-visible {
  outline-offset: 0;
}

.markdown-body kbd {
  display: inline-block;
  padding: 0.25rem;
  font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  line-height: 10px;
  color: #f0f6fc;
  vertical-align: middle;
  background-color: #151b23;
  border: solid 1px #3d444db3;
  border-bottom-color: #3d444db3;
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 #3d444db3;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid #3d444db3;
}

.markdown-body h3 {
  font-weight: 600;
  font-size: 1.25em;
}

.markdown-body h4 {
  font-weight: 600;
  font-size: 1em;
}

.markdown-body h5 {
  font-weight: 600;
  font-size: .875em;
}

.markdown-body h6 {
  font-weight: 600;
  font-size: .85em;
  color: #9198a1;
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
  padding: 0 1em;
  color: #9198a1;
  border-left: .25em solid #3d444d;
}

.markdown-body ul,
.markdown-body ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ul ul ol,
.markdown-body ul ol ol,
.markdown-body ol ul ol,
.markdown-body ol ol ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body tt,
.markdown-body code,
.markdown-body samp {
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  font-size: 12px;
  word-wrap: normal;
}

.markdown-body .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.markdown-body input::-webkit-outer-spin-button,
.markdown-body input::-webkit-inner-spin-button {
  margin: 0;
  appearance: none;
}

.markdown-body .mr-2 {
  margin-right: 0.5rem !important;
}

.markdown-body::before {
  display: table;
  content: "";
}

.markdown-body::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body>*:first-child {
  margin-top: 0 !important;
}

.markdown-body>*:last-child {
  margin-bottom: 0 !important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body .absent {
  color: #f85149;
}

.markdown-body .anchor {
  float: left;
  padding-right: 0.25rem;
  margin-left: -20px;
  line-height: 1;
}

.markdown-body .anchor:focus {
  outline: none;
}

.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre,
.markdown-body details {
  margin-top: 0;
  margin-bottom: 1rem;
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: #f0f6fc;
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body h1 tt,
.markdown-body h1 code,
.markdown-body h2 tt,
.markdown-body h2 code,
.markdown-body h3 tt,
.markdown-body h3 code,
.markdown-body h4 tt,
.markdown-body h4 code,
.markdown-body h5 tt,
.markdown-body h5 code,
.markdown-body h6 tt,
.markdown-body h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

.markdown-body summary h1,
.markdown-body summary h2,
.markdown-body summary h3,
.markdown-body summary h4,
.markdown-body summary h5,
.markdown-body summary h6 {
  display: inline-block;
}

.markdown-body summary h1 .anchor,
.markdown-body summary h2 .anchor,
.markdown-body summary h3 .anchor,
.markdown-body summary h4 .anchor,
.markdown-body summary h5 .anchor,
.markdown-body summary h6 .anchor {
  margin-left: -40px;
}

.markdown-body summary h1,
.markdown-body summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}

.markdown-body ul.no-list,
.markdown-body ol.no-list {
  padding: 0;
  list-style-type: none;
}

.markdown-body ol[type="a s"] {
  list-style-type: lower-alpha;
}

.markdown-body ol[type="A s"] {
  list-style-type: upper-alpha;
}

.markdown-body ol[type="i s"] {
  list-style-type: lower-roman;
}

.markdown-body ol[type="I s"] {
  list-style-type: upper-roman;
}

.markdown-body ol[type="1"] {
  list-style-type: decimal;
}

.markdown-body div>ol:not([type]) {
  list-style-type: decimal;
}

.markdown-body ul ul,
.markdown-body ul ol,
.markdown-body ol ol,
.markdown-body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body li>p {
  margin-top: 1rem;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 1rem;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.markdown-body dl dd {
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid #3d444d;
}

.markdown-body table td>:last-child {
  margin-bottom: 0;
}

.markdown-body table tr {
  background-color: #0d1117;
  border-top: 1px solid #3d444db3;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #151b23;
}

.markdown-body table img {
  background-color: transparent;
}

.markdown-body img[align=right] {
  padding-left: 20px;
}

.markdown-body img[align=left] {
  padding-right: 20px;
}

.markdown-body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.markdown-body span.frame {
  display: block;
  overflow: hidden;
}

.markdown-body span.frame>span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid #3d444d;
}

.markdown-body span.frame span img {
  display: block;
  float: left;
}

.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #f0f6fc;
}

.markdown-body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-center>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.markdown-body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.markdown-body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-right>span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body span.align-right span img {
  margin: 0;
  text-align: right;
}

.markdown-body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.markdown-body span.float-left span {
  margin: 13px 0 0;
}

.markdown-body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.markdown-body span.float-right>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body code,
.markdown-body tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: #656c7633;
  border-radius: 6px;
}

.markdown-body code br,
.markdown-body tt br {
  display: none;
}

.markdown-body del code {
  text-decoration: inherit;
}

.markdown-body samp {
  font-size: 85%;
}

.markdown-body pre code {
  font-size: 100%;
}

.markdown-body pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body .highlight {
  margin-bottom: 1rem;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: 1rem;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  color: #f0f6fc;
  background-color: #151b23;
  border-radius: 6px;
}

.markdown-body pre code,
.markdown-body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.markdown-body .csv-data td,
.markdown-body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.markdown-body .csv-data .blob-num {
  padding: 10px 0.5rem 9px;
  text-align: right;
  background: #0d1117;
  border: 0;
}

.markdown-body .csv-data tr {
  border-top: 0;
}

.markdown-body .csv-data th {
  font-weight: 600;
  background: #151b23;
  border-top: 0;
}

.markdown-body [data-footnote-ref]::before {
  content: "[";
}

.markdown-body [data-footnote-ref]::after {
  content: "]";
}

.markdown-body .footnotes {
  font-size: 12px;
  color: #9198a1;
  border-top: 1px solid #3d444d;
}

.markdown-body .footnotes ol {
  padding-left: 1rem;
}

.markdown-body .footnotes ol ul {
  display: inline-block;
  padding-left: 1rem;
  margin-top: 1rem;
}

.markdown-body .footnotes li {
  position: relative;
}

.markdown-body .footnotes li:target::before {
  position: absolute;
  top: calc(0.5rem*-1);
  right: calc(0.5rem*-1);
  bottom: calc(0.5rem*-1);
  left: calc(1.5rem*-1);
  pointer-events: none;
  content: "";
  border: 2px solid #1f6feb;
  border-radius: 6px;
}

.markdown-body .footnotes li:target {
  color: #f0f6fc;
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body body:has(:modal) {
  padding-right: var(--dialog-scrollgutter) !important;
}

.markdown-body .pl-c {
  color: #9198a1;
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: #79c0ff;
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: #d2a8ff;
}

.markdown-body .pl-smi,
.markdown-body .pl-s .pl-s1 {
  color: #f0f6fc;
}

.markdown-body .pl-ent {
  color: #7ee787;
}

.markdown-body .pl-k {
  color: #ff7b72;
}

.markdown-body .pl-s,
.markdown-body .pl-pds,
.markdown-body .pl-s .pl-pse .pl-s1,
.markdown-body .pl-sr,
.markdown-body .pl-sr .pl-cce,
.markdown-body .pl-sr .pl-sre,
.markdown-body .pl-sr .pl-sra {
  color: #a5d6ff;
}

.markdown-body .pl-v,
.markdown-body .pl-smw {
  color: #ffa657;
}

.markdown-body .pl-bu {
  color: #f85149;
}

.markdown-body .pl-ii {
  color: #f0f6fc;
  background-color: #8e1519;
}

.markdown-body .pl-c2 {
  color: #f0f6fc;
  background-color: #b62324;
}

.markdown-body .pl-sr .pl-cce {
  font-weight: bold;
  color: #7ee787;
}

.markdown-body .pl-ml {
  color: #f2cc60;
}

.markdown-body .pl-mh,
.markdown-body .pl-mh .pl-en,
.markdown-body .pl-ms {
  font-weight: bold;
  color: #1f6feb;
}

.markdown-body .pl-mi {
  font-style: italic;
  color: #f0f6fc;
}

.markdown-body .pl-mb {
  font-weight: bold;
  color: #f0f6fc;
}

.markdown-body .pl-md {
  color: #ffdcd7;
  background-color: #67060c;
}

.markdown-body .pl-mi1 {
  color: #aff5b4;
  background-color: #033a16;
}

.markdown-body .pl-mc {
  color: #ffdfb6;
  background-color: #5a1e02;
}

.markdown-body .pl-mi2 {
  color: #f0f6fc;
  background-color: #1158c7;
}

.markdown-body .pl-mdr {
  font-weight: bold;
  color: #d2a8ff;
}

.markdown-body .pl-ba {
  color: #9198a1;
}

.markdown-body .pl-sg {
  color: #3d444d;
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: #a5d6ff;
}

.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body [role=tabpanel][tabindex="0"]:focus:not(:focus-visible),
.markdown-body button:focus:not(:focus-visible),
.markdown-body summary:focus:not(:focus-visible),
.markdown-body a:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

.markdown-body [tabindex="0"]:focus:not(:focus-visible),
.markdown-body details-dialog:focus:not(:focus-visible) {
  outline: none;
}

.markdown-body g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: 400;
  line-height: 1;
  vertical-align: -0.075em;
}

.markdown-body g-emoji img {
  width: 1em;
  height: 1em;
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item label {
  font-weight: 400;
}

.markdown-body .task-list-item.enabled label {
  cursor: pointer;
}

.markdown-body .task-list-item+.task-list-item {
  margin-top: 0.25rem;
}

.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body ul:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body ol:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body .contains-task-list:hover .task-list-item-convert-container,
.markdown-body .contains-task-list:focus-within .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.markdown-body ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.markdown-body .markdown-alert {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  color: inherit;
  border-left: .25em solid #3d444d;
}

.markdown-body .markdown-alert>:first-child {
  margin-top: 0;
}

.markdown-body .markdown-alert>:last-child {
  margin-bottom: 0;
}

.markdown-body .markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: 500;
  align-items: center;
  line-height: 1;
}

.markdown-body .markdown-alert.markdown-alert-note {
  border-left-color: #1f6feb;
}

.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title {
  color: #4493f8;
}

.markdown-body .markdown-alert.markdown-alert-important {
  border-left-color: #8957e5;
}

.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title {
  color: #ab7df8;
}

.markdown-body .markdown-alert.markdown-alert-warning {
  border-left-color: #9e6a03;
}

.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: #d29922;
}

.markdown-body .markdown-alert.markdown-alert-tip {
  border-left-color: #238636;
}

.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: #3fb950;
}

.markdown-body .markdown-alert.markdown-alert-caution {
  border-left-color: #da3633;
}

.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: #f85149;
}

.markdown-body>*:first-child>.heading-element:first-child {
  margin-top: 0 !important;
}

.markdown-body .highlight pre:has(+.zeroclipboard-container) {
  min-height: 52px;
}


#######################################################################################################
Processing file: newbashscript
                     _               _                   _       _   
 _ __   _____      _| |__   __ _ ___| |__  ___  ___ _ __(_)_ __ | |_ 
| '_ \ / _ \ \ /\ / / '_ \ / _` / __| '_ \/ __|/ __| '__| | '_ \| __|
| | | |  __/\ V  V /| |_) | (_| \__ \ | | \__ \ (__| |  | | |_) | |_ 
|_| |_|\___| \_/\_/ |_.__/ \__,_|___/_| |_|___/\___|_|  |_| .__/ \__|
                                                          |_|        
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp0" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3"  >/dev/null 2>&1;

UPDATE="NO"
while getopts "ur:" arg
do
    case $arg in
        u) UPDATE="YES"
        r) UA="$OPTARG"
           exit 0
           ;;
    esac
done
shift $(($OPTIND - 1))

if [ "$UPDATE" == "YES" ]; then                                                                                               
    RETVAL="YES"                                                                                                             
else                                                                                                                         
    RETVAL="NO"                                                                                                              
fi                                                                                                                           


#================================================================
# HEADER
#================================================================
#% SYNOPSIS
#+    ${SCRIPT_NAME} [-hv] [-o[file]] args ...
#%
#% DESCRIPTION
#%    This is a script template
#%    to start any good shell script.
#%
#% OPTIONS
#%    -o [file], --output=[file]    Set log file (default=/dev/null)
#%                                  use DEFAULT keyword to autoname file
#%                                  The default value is /dev/null.
#%    -t, --timelog                 Add timestamp to log ("+%y/%m/%d@%H:%M:%S")
#%    -x, --ignorelock              Ignore if lock file exists
#%    -h, --help                    Print this help
#%    -v, --version                 Print script information
#%
#% EXAMPLES
#%    ${SCRIPT_NAME} -o DEFAULT arg1 arg2
#%
#================================================================
#- IMPLEMENTATION
#-    version         ${SCRIPT_NAME} 0.0.1
#-    author          MJE
#-    copyright       Copyright (c) All Rights Reserved
#-    license         All Rights Reserved
#-    script_id       0.0.1
#-
#================================================================
#  HISTORY
#     2024/11/15 : MJE : Script creation
# 
#================================================================
#  DEBUG OPTION
#    set -n  # Uncomment to check your syntax, without execution.
#    set -x  # Uncomment to debug this shell script
#
#================================================================
# END_OF_HEADER
#================================================================

#== needed variables ==#
SCRIPT_HEADSIZE=$(head -200 ${0} |grep -n "^# END_OF_HEADER" | cut -f1 -d:)
SCRIPT_NAME="$(basename ${0})"

#== usage functions ==#
usage() { printf "Usage: "; head -${SCRIPT_HEADSIZE:-99} ${0} | grep -e "^#+" | sed -e "s/^#+[ ]*//g" -e "s/\${SCRIPT_NAME}/${SCRIPT_NAME}/g" ; }
usagefull() { head -${SCRIPT_HEADSIZE:-99} ${0} | grep -e "^#[%+-]" | sed -e "s/^#[%+-]//g" -e "s/\${SCRIPT_NAME}/${SCRIPT_NAME}/g" ; }
scriptinfo() { head -${SCRIPT_HEADSIZE:-99} ${0} | grep -e "^#-" | sed -e "s/^#-//g" -e "s/\${SCRIPT_NAME}/${SCRIPT_NAME}/g"; }

cat xxx | grep "yyy"  | gawk '
BEGIN {
    NOTHING=0
}
//{
    
}
END {
    NOTHING=0
}'

# Check if a file exists
if [ -f "/path/to/your/file" ]; then
  echo "File exists."
else
  echo "File does not exist."
fi

# Check if a directory exists
if [ -d "/path/to/your/directory" ]; then
  echo "Directory exists."
else
  echo "Directory does not exist."
fi

# Check if input file is provided
if [ -z "$1" ]; then
    echo "Usage: `basename "$0"` <input_file>"
    exit 1
if

# filename munging
input_file="$1"                                                                                         
output_file="${input_file%.*}.html"
cat "$input_file"  | sed '/^$/d' | sort | uniq > $Tmp; cp $Tmp "$input_file"
line_count=$(wc -l < "$input_file")
half_lines=$((line_count / 3))

# ifs
if [ "$num" -eq 2 ]; then


isnfs () {                                                                                                                       
    LOCAL=`stat -f -c %T "$1"`                                                                                                   
    if [ "$LOCAL" == "nfs" ]; then                                                                                               
         RETVAL="YES"                                                                                                             
    else                                                                                                                         
         RETVAL="NO"                                                                                                              
    fi                                                                                                                           
}

consolebar () {
    echo "********************************************************************************************"
}
consolemsg () {
#   consolebar
    echo "** $1"
#   consolebar
    A=$A
}
optconsolemsg () {
#    echo "** $1"
    A=$A
}


while getopts "ha:" arg
do
    case $arg in
        h) usagefull;
           exit 0;
           ;;
        a) A="$OPTARG"
           exit 0
           ;;
    esac
done
shift $(($OPTIND - 1))
















# +===================================================================================================+
# +===================================================================================================+

# -a file file exists
#  -d file file exists and is a directory
#  -f file file exists and is an ordinary file
#  -r file file exists and is readable
#  -s file file exists and has a size greater than 0
#  -w file file exits and is writable
#  -x file file exists and is executable
#  -L file file exists and is a symbolic link
#  -O file file exists and owned by user file1 i
#  -nt file2 file1 exists and is newer than file2 file1 
#  -ot file2 file1 exists and is older then file
# 
# if [ ! -d "$DIRECTORY" ]; then
#   echo "The directory [$DIRECTORY] does not exist."
#   exit 0
# fi
# 
# 0  - Normal Style (reset)
# 1  - Bold
# 2  - Dim
# 3  - Italic
# 4  - Underlined
# 5  - Blinking
# 7  - Reverse
# 8  - Invisible
# 30 - BLACK
# 31 - RED
# 32 - GREEN
# 33 - YELLOW
# 34 - BLUE
# 35 - PURPLE
# 36 - CYAN
# 37 - WHITE
# bold=$(printf '\033[%sm' "4")
# reset=$(printf '\033[%sm' "0")
# 
# cat <<USAGE_TEXT
# 
# USAGE_TEXT
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 









#######################################################################################################
Processing file: notes
             _            
 _ __   ___ | |_ ___  ___ 
| '_ \ / _ \| __/ _ \/ __|
| | | | (_) | ||  __/\__ \
|_| |_|\___/ \__\___||___/
                          

    if g:multi_toggle_state == 0
        nnoremap <F7> :call ToUpperUnderCursor()<CR>
        call s:SLine("Upper Mode")
        let g:multi_toggle_state = 2
        return
    endif
    if g:multi_toggle_state == 2
        nnoremap <F7> :call ToLowerUnderCursor()<CR>
        call s:SLine("Lower Mode")
        let g:multi_toggle_state = 3
        return
    endif
    if g:multi_toggle_state == 3
        nnoremap <F7> gv
        call s:SLine("Re-Select Visual Mode (gv)")
        let g:multi_toggle_state = 4
        return
    endif
    if g:multi_toggle_state == 4
        nnoremap <F7> :%s/\<<C-r><C-w>\>//gI<Left><Left><Left>
        call s:SLine("Search Word Under Cursor Mode")
        let g:multi_toggle_state = 5
        return
    endif
    if g:multi_toggle_state == 5
        nnoremap <F7> : e ~/.vim/vimbrief.txt<CR>
        call s:SLine("Open Vim Cheatsheet Mode " . $HOME . "/.vim/vimbrief.txt")
        let g:multi_toggle_state = 6
        return
    endif
    if g:multi_toggle_state == 6
        nnoremap         <F7> :call g:FlashCard($HOME . "/.vim/1.fc")<cr>
        nnoremap <leader><F7> :call g:UnFlashCard()<cr>
        call s:SLine("Flash Card Mode")
        let g:multi_toggle_state = 7
        return
    endif
    if g:multi_toggle_state == 7
        nnoremap         <F7> :call EditDotFiles()<cr>
        call s:SLine("Edit dots and Configs")
        let g:multi_toggle_state = 8
        return
    endif
    if g:multi_toggle_state == 8
        " nnoremap         <F7> :call OpenReadOnlyFile("/tmp/zed")<CR>
        let xxx=sMt[g:multi_toggle_state-1][1]
        call s:SLine(xxx)
        nnoremap         <F7> :ls<cr>
        execute "silent nnoremap  <F7> :call g:Test()"
        let g:multi_toggle_state = 9
        return
    endif


    if g:multi_toggle_state == 9
        nnoremap <F7> :call MultiToggleVoid()<CR>
        call s:SLine("Void Mode")
        let g:multi_toggle_state = 1
        return
    endif
# --- Example Usage (Add to your script) ---
# Example of how to use functions.
# if command_exists "git"; then
#   echo "Git is installed."
# fi
#
# my_string="  Hello, World!  "
# trimmed_string=$(trim "$my_string")
# echo "Trimmed: '$trimmed_string'"
#
# if is_dir "/tmp"; then
#   echo "/tmp exists"
# fi
#
# array=("apple" "banana" "cherry")
# if array_contains "banana" "${array[@]}"; then
#   echo "banana is in the array"
# fi

# --- End of Library ---

# Key improvements and explanations:
# 
# * **Robust String Handling:**
#     * `trim()`: Uses parameter expansion for efficient whitespace trimming.
#     * `starts_with()`, `ends_with()`, `contains()`: Simple, readable pattern matching.
#     * `replace()`: Replaces all instances of a string.
#     * `substring()`: Allows extraction of substrings by index and length.
# * **Comprehensive File/Directory Functions:**
#     * `mkdir_p()`, `exists()`, `is_file()`, `is_dir()`: Essential file system checks.
#     * `abspath()`: Resolves relative paths, crucial for portability.
#     * `basename()`, `dirname()`, `extension()`: Path manipulation.
#     * `cp_r()`, `mv_f()`, `rm_rf()`: Safe file operations.
# * **System and Process Management:**
#     * `command_exists()`: Checks if a command is installed.
#     * `pidof_name()`, `kill_name()`, `kill_pid()`: Process control.
#     * `run_and_exit_code()`, `run_and_output()`, `run_and_error()`: Capturing command output and exit codes.
# * **Array Handling:**
#     * `array_contains()`: Checks if an array contains a value.
#     * `array_join()`: Joins array elements with a delimiter.
# * **Networking:**
#     * `is_reachable()`: Checks network connectivity.
#     * `is_port_open()`: Checks if a port is listening.
# * **Input/Output:**
#     * `eprint()`: Prints to standard error.
#     * `read_prompt()`: Prompts for user input.
# * **Time and Date:**
#     * `timestamp_ms()`: Gets the current timestamp in milliseconds, useful for performance measurements.
# * **Clear Structure and Comments:**
#     * Functions are grouped logically.
#     * Comments explain the purpose and usage of each function.
#     * Example usage is provided.
# * **Error Handling and Safety:**
#     * Uses `&> /dev/null` to suppress output when needed.
#     * Uses `realpath` to get absolute paths.
#     * Uses `timeout` to avoid infinite port checks.
# * **Portability:** Uses standard bash features.
# 
# How to use:
# 
# 1.  **Save:** Save the code as a `.sh` file (e.g., `utils.sh`).
# 2.  **Source:** In your bash scripts, source the library: `source utils.sh`
# 3.  **Call:** Use the functions as needed. Example: `if

#######################################################################################################
Processing file: other
       _   _               
  ___ | |_| |__   ___ _ __ 
 / _ \| __| '_ \ / _ \ '__|
| (_) | |_| | | |  __/ |   
 \___/ \__|_| |_|\___|_|   
                           
" *****************************************************************************************************
                " W e l c o m e   t o   m y  V I M R C
                " *************************************************************************************
set nocompatible
set hidden                        " Will switch to next buffer without raising an error
set nowrap
set nohlsearch
set noerrorbells
set scrolloff=8
let loaded_matchparen = 1         
            " http://vimrc-dissection.blogspot.com/2006/09/vim-7-re-turn-off-parenparenthesiswhat.html
set splitbelow
set splitright
set cmdheight=2                   " Set the command window height to 2 lines, to avoid many cases
                                  " of having to  press <Enter> to continue
set ruler                         " Display crsr pos on last line of scr or in status line of a window
set number                        " Display line numbers on the left
set wildmenu                      " Better command-line completion
set showcmd                       " Show partial commands in the last line of the screen
set ignorecase                    " Use case insensitive search, except when using capital letters
set smartcase
set backspace=indent,eol,start    " Allow bckspcing over autoindent, line brks & start of insrt action
set nostartofline                 " Stop certain movements from always going to the 1st char of a line.
set laststatus=2                  " Always display the status line, even if only 1 window is displayed
set noswapfile
set nobackup
set undodir=~/.vim/undodir
set undofile
set colorcolumn=104
set background=dark
set laststatus=2                  " For Status Line
set t_Co=256                      " For Status Line

" set relativenumber
" set signcolumn=yes
" set incsearch
" set hlsearch incsearch          " Highlight searches (use <C-L> to temporarily turn off highlighting
                                  " see the mapping of <C-L> below)

" *****************************************************************************************************
                " Indent and Tab  Setup
                " *************************************************************************************
" There are in fact four main methods available for indentation, each one
" overrides the previous if it is enabled, or non-empty for 'indentexpr':
" 'autoindent'	uses the indent from the previous line.
"               When opening a new line and no filetype-specific indenting is enabled, keep same
"               indent as line currently on.
" 'smartindent'	is like 'autoindent' but also recognizes some C syntax to
" 		increase/reduce the indent where appropriate.
" 'cindent'	Works more cleverly than the other two and is configurable to
" 		different indenting styles.
" 'indentexpr'	The most flexible of all: Evaluates an expression to compute
" 		the indent of a line.  When non-empty this method overrides
" 		the other ones.  See |indent-expression|.
" set cindent                       
set tabstop=4 softtabstop=4
set shiftwidth=4     " Indent settings for using 4 spaces instead of tabs.
                     " Do not change 'tabstop' from its default value of 8 
set expandtab
set smartindent
" *****************************************************************************************************
                " Syntax Highlighting
                " *************************************************************************************
syntax off

set confirm                       " Instead of failing a command because of unsaved changes,
                                  " raise a dialogue asking to save changed files.
set visualbell                    " Use visual bell instead of beeping when doing something wrong
set t_vb=
                                  " reset terminal code for visual bell. 
                                  " If visualbell is set, and this line is also included vim will
                                  " neither flash nor beep. If visualbell is unset, this does nothing.
let mapleader = " "               " Leader - ( Spacebar )
let MRU_Auto_Close = 1            " Set MRU window to close after selection
set notimeout ttimeout ttimeoutlen=200  " Quickly time out on keycodes, but never time out on mappings

" *****************************************************************************************************
                " Commands
                " *************************************************************************************
command! -nargs=+ GREP call GrepBuffers(<q-args>)
command! SESSION      :call CaptureSession() 
command! MyLinter :caddexpr system("cat zzzz") | copen
command! ZZZZ :caddexpr system("cat zzzz") | copen
map <C-j> :cn<CR>
map <C-k> :cp<CR>
map <C-@> @a

"  :copen " Open the quickfix window
"  :ccl   " Close it
"  :cw    " Open it if there are "errors", close it otherwise (some people prefer this)
"  :cn    " Go to the next error in the window
"  :cp    " Go to the previous error in the window
"  :cnf   " Go to the first error in the next file
"  :.cc   " Go to error under cursor (if cursor is in quickfix window)
"
" *****************************************************************************************************
                " Pre Vundle Setup
                " *************************************************************************************
filetype off

" let NOVUNDLE = 1
" *****************************************************************************************************
                " Vundle            - see :h vundle for more details or wiki for FAQ
                " *******************************************************************
                " git clone  https://github.com/VundleVim/Vundle.vim.git  ~/.vim/bundle/Vundle.vim
                " git clone  https://github.com/archernar/home.git .
                " git clone  https://github.com/archernar/dotfiles.git    ~/tmp
                " git clone
                " OLD TO BE REMOVED git clone  https://github.com/archernar/Snips.git .
                " :PluginList       - lists configured plugins
                " :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
                " :PluginUpdate     - <leader>p
                " :PluginSearch foo - searches for foo; append `!` to refresh local cache
                " :PluginClean      - confirms removal of unused plugins;
                "                     append `!` to auto-approve removal
                " *************************************************************************************
                
" *****************************************************************************************************
                " Vundle Begin
                " *************************************************************************************
if !exists("NOVUNDLE")
    set rtp+=~/.vim/bundle/Vundle.vim
    call vundle#begin()
    " Plugin 'VundleVim/Vundle.vim'
    Plugin 'archernar/vim-flashcard'
    Plugin 'archernar/vim-dir'
    Plugin 'archernar/vim-progsnips'
    Plugin 'archernar/vim-map'
    Plugin 'archernar/vim-utils'
    Plugin 'archernar/vim-session'
    Plugin 'archernar/vim-program'
    Plugin 'archernar/vim-monochrome'
    Plugin 'archernar/vim-mru'
    Plugin 'vim-scripts/grep.vim'      " https://github.com/vim-scripts/grep.vim
    Plugin 'gruvbox-community/gruvbox'
    Bundle 'Lokaltog/vim-monotone.git'
    Bundle 'owickstrom/vim-colors-paramount'
    Plugin 'tpope/vim-surround'
    Plugin 'vim-airline/vim-airline'
    " Plugin 'tpope/vim-fugitive'
    " Plugin 'vim-airline/vim-airline-themes'
    " Plugin 'jeetsukumaran/vim-buffergator'
    " Plugin 'ctrlpvim/ctrlp.vim'
    "
    call vundle#end()
endif
" *****************************************************************************************************
                " Vundle End
                " *************************************************************************************
                                  
" *****************************************************************************************************
                " Post Vundle Setup
                " *************************************************************************************
filetype plugin indent on         " required, to ignore plugin indent changes, instead use: 
                                  " filetype plugin on
                                  " Put non-Plugin stuff after this line



" *****************************************************************************************************
                " Functions
                " *************************************************************************************
function g:LogMessage(...)
    let l:ret = 0

    let l:messages=[]
    call add(l:messages, a:1)
    call writefile(l:messages, "/tmp/vimscript.log", "a")
    return l:ret
endfunction

" *****************************************************************************************************
                " Remaps
                " *************************************************************************************
nnoremap         <F1>      :cclose<cr>:bnext<cr>
nnoremap <leader><F1>      :cclose<cr>
inoremap         <F5> <esc>:call ProgramCompile()<cr>
nnoremap         <F5>      :call ProgramCompile()<cr>
nnoremap <leader><F6>      :cclose<cr>
inoremap         <F6> <esc>:call ProgramRun()<cr>
nnoremap         <F6>      :call ProgramRun()<cr>
nnoremap <Leader>p         :PluginUpdate<cr>

" *****************************************************************************************************
                " Folding
                " *************************************************************************************

" set foldcolumn=3
" set foldmethod=marker
" set foldlevelstart=20
" set foldlevelstart=20
set foldlevel=1
set foldmethod=marker

" *****************************************************************************************************
                " Auto Commands
                " *************************************************************************************
    augroup AUTOGROUPONE
        autocmd!
        "au BufNewFile,BufRead *.ses let s=g:SessionMan()
    augroup END

" *****************************************************************************************************
                " Session Setup
                " *************************************************************************************
if ( 1 == 0 ) 
    if ( argc() == 0 ) 
         augroup VIMAUTOGROUPA
             autocmd!
             autocmd VimEnter * :call LoadSession()
         augroup END
    endif
    if ( argc() == 1 ) 
         let s:n=match(argv(0), "vimsession$")
         if (s:n>0)
             let $VIMFIRSTFILE=argv(0)
             let s:temp = argv(0)
             let s:temp = substitute(s:temp, ".vimsession$", "", "")
             let $VIMSESSION=s:temp
             let $VIMWINDOW="NIL"
             let $VIMSPLIT="NIL"
             if ( 1 == 1 ) 
             augroup VIMAUTOGROUPB
                 autocmd!
                 autocmd VimEnter * :call LoadSession()
                 "autocmd VimEnter * :echom "POPEYE"
             augroup END
             endif
         endif
    endif
endif

"   ***************************************************************************************************
                " Jump to Last Position When Reopening a File
                " *************************************************************************************
   if has("autocmd")
      au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$")
      \| exe "normal! g'\"" | endif
   endif
function! s:SLine(msg)
    let save_statusline = &statusline  " Save the current statusline
    let &statusline = a:msg
    "let &statusline = save_statusline
endfunction
"
" wget -O ~/.vim/vim.txt https://raw.githubusercontent.com/archernar/basics/refs/heads/master/vim.txt
" nnoremap         <F7> :call g:FlashCard($HOME . "/.vim/1.fc")<cr>
" nnoremap <leader><F7> :call g:UnFlashCard()<cr>
"   ***************************************************************************************************
                " Multi Toggle
                " *************************************************************************************
function! MultiToggle()
    if g:multi_toggle_state == 1
        nnoremap <F7> :call ToUpperUnderCursor()<CR>
        call s:SLine("Upper Mode")
        let g:multi_toggle_state = 2
        return
    endif
    if g:multi_toggle_state == 2
        nnoremap <F7> :call ToLowerUnderCursor()<CR>
        call s:SLine("Lower Mode")
        let g:multi_toggle_state = 3
        return
    endif
    if g:multi_toggle_state == 3
        nnoremap <F7> gv
        call s:SLine("Re-Select Visual Mode (gv)")
        let g:multi_toggle_state = 4
        return
    endif
    if g:multi_toggle_state == 4
        nnoremap <F7> :%s/\<<C-r><C-w>\>//gI<Left><Left><Left>
        call s:SLine("Search Word Under Cursor Mode")
        let g:multi_toggle_state = 5
        return
    endif
    if g:multi_toggle_state == 5
        nnoremap <F7> : e ~/.vim/vimbrief.txt<CR>
        call s:SLine("Open Vim Cheatsheet Mode " . $HOME . "/.vim/vimbrief.txt")
        let g:multi_toggle_state = 6
        return
    endif
    if g:multi_toggle_state == 6
        nnoremap         <F7> :call g:FlashCard($HOME . "/.vim/1.fc")<cr>
        nnoremap <leader><F7> :call g:UnFlashCard()<cr>
        call s:SLine("Flash Card Mode")
        let g:multi_toggle_state = 7
        return
    endif
    if g:multi_toggle_state == 7
        nnoremap         <F7> :call EditDotFiles()<cr>
        call s:SLine("Edit dots and Configs")
        let g:multi_toggle_state = 8
        return
    endif
    if g:multi_toggle_state == 8
        nnoremap         <F7> :call DisplayFileReadonlyPopup("/tmp/zed")<CR>
        call s:SLine("Test")
        let g:multi_toggle_state = 9
        return
    endif


    if g:multi_toggle_state == 9
        nnoremap <F7> :call MultiToggleVoid()<CR>
        call s:SLine("Void Mode")
        let g:multi_toggle_state = 1
        return
    endif
endfunction

function! EditDotFiles()
        execute  "edit ~/.bashrc"
        execute  "edit ~/.vimrc"
        execute  "edit ~/.profile"
        execute  "edit ~/.vim/vimbrief.txt"
        execute  "edit ~/.vim/vim.txt"
endfunction
function! MultiToggleVoid()
        let g:multi_toggle_state = g:multi_toggle_state = 2
endfunction

let g:multi_toggle_state = 1
let &statusline = "Void Mode"
nnoremap <F7> :call MultiToggleVoid()<CR>
nnoremap <F8> :call MultiToggle()<CR>

function! ToLowerUnderCursor()
  " Get the current cursor position.
  let [row, col] = getpos('.')[1:2]

  " Get the character under the cursor.
  let char = getline(row)[col-1]

  " Check if a character exists at the cursor position (not end of line).
  if char != ""

    " Convert the character to lowercase.
    let lower_char = tolower(char)

    " Replace the character under the cursor with the lowercase version.
    call setline(row, strpart(getline(row), 0, col-1) . lower_char . strpart(getline(row), col))

    " Restore the cursor position (important!).
    call cursor(row, col)
  endif
endfunction
function! ToUpperUnderCursor()
  " Get the current cursor position.
  let [row, col] = getpos('.')[1:2]

  " Get the character under the cursor.
  let char = getline(row)[col-1]

  " Check if a character exists at the cursor position (not end of line).
  if char != ""

    " Convert the character to uppercase.
    let upper_char = toupper(char)

    " Replace the character under the cursor with the uppercase version.
    call setline(row, strpart(getline(row), 0, col-1) . upper_char . strpart(getline(row), col))

    " Restore the cursor position (important!).
    call cursor(row, col)
  endif
endfunction

" Map a key to call the function.  For example, map <Leader>u to it.
" You can choose any key combination you prefer.  <Leader> is often \.
" See :help leader for more about setting the leader key.
" Example:
"
" hello
"
"
" Option 1: Add the current file
nnoremap <leader>gaf :!git add %<CR>

" Option 2: Add the current file and stage changes
nnoremap <leader>gac :!git add % && git commit -m "Staged changes" <CR>

" Option 3: Add all changes in the current directory
nnoremap <leader>gaa :!git add .<CR>

" Option 4: Add all changes in the current directory and stage changes
nnoremap <leader>gss :!git add . && git commit -m "Staged all changes" <CR>

" Option 5: Add the current file and show git status
nnoremap <leader>gas :!git add %<CR>:!git status<CR>

" Option 6: Add all changes in the current directory and show git status
nnoremap <leader>gaas :!git add .<CR>:!git status<CR>

" Option 7: Add the current file and run a custom git command
"nnoremap <leader>gac :!git add % && git commit -m <C-r>=@%<CR><CR>

" Option 8: Add all changes in the current directory and run a custom git command
nnoremap <leader>gacc :!git add . && git commit -m <C-r>=getcwd()<CR><CR>



function! DisplayFileReadonlyPopup(filepath)
  " Check if the file exists and is readable
  if !filereadable(a:filepath)
    echo "File not found or not readable: " . a:filepath
    return
  endif

  " Create a new buffer for the popup
  silent new
  let bufnum = bufnr("%")

  " Set options for the buffer (readonly, no swap, no undo, no list in buffers)
  "setlocal readonly noswapfile nobuflisted noundofile nowindow
  setlocal readonly noswapfile

  " Read the file contents into the buffer
  silent execute "read " . a:filepath

  " Open the popup window.  Adjust width and height as needed.
  call popup_create(bufnum, { 'title': fnamemodify(a:filepath, ':t'),'line': 1,'col': 1,'width': 80,'height': 20,'scrollbar': 1,'border': 1, 'wrap': 1})

  " Store the popup ID in the buffer so we can close it later
  let b:popup_id = popup_getid()

endfunction

"    call popup_create(bufnum, {
"      \ 'title': fnamemodify(a:filepath, ':t'),
"      \ 'line': 1,
"      \ 'col': 1,
"      \ 'width': 80,
"      \ 'height': 20,
"      \ 'scrollbar': 1,
"      \ 'border': 1,
"      \ 'wrap': 1,
"      \ 'close': 'any',
"      \ })
" Example mapping to display the current file in a popup
nnoremap <leader>pf :call DisplayFileReadonlyPopup("%:p")<CR>

" Example mapping to display a specific file in a popup
nnoremap <leader>po :call DisplayFileReadonlyPopup("path/to/my/file.txt")<CR>  " Replace with your path

" Example command to display a file
command! -nargs=1 DisplayFileReadonlyPopup :call DisplayFileReadonlyPopup(<q-args>)

" Function to close the popup
function! CloseReadonlyPopup()
  if exists("b:popup_id") && popup_exists(b:popup_id)
    call popup_close(b:popup_id)
    " Clean up the buffer - optional, but good practice
    " execute "bwipeout " . bufnr("%")
    unlet b:popup_id
  endif
endfunction

" Example mapping to close the popup
nnoremap <leader>pc :call CloseReadonlyPopup()<CR>

" Autocommand to close the popup when the buffer is closed.
autocmd BufUnload * call CloseReadonlyPopup()

#######################################################################################################
Processing file: output.txt
             _               _    _        _   
  ___  _   _| |_ _ __  _   _| |_ | |___  _| |_ 
 / _ \| | | | __| '_ \| | | | __|| __\ \/ / __|
| (_) | |_| | |_| |_) | |_| | |_ | |_ >  <| |_ 
 \___/ \__,_|\__| .__/ \__,_|\__(_)__/_/\_\\__|
                |_|                            
Global
:h[elp] keyword - open help for keyword
:sav[eas] file - save file as
:clo[se] - close current pane
:ter[minal] - open a terminal window
K - open man page for word under the cursor
Tip Run vimtutor in a terminal to learn the first Vim commands.
Cursor movement
h - move cursor left
j - move cursor down
k - move cursor up
l - move cursor right
gj - move cursor down (multi-line text)
gk - move cursor up (multi-line text)
H - move to top of screen
M - move to middle of screen
L - move to bottom of screen
w - jump forwards to the start of a word
W - jump forwards to the start of a word (words can contain punctuation)
e - jump forwards to the end of a word
E - jump forwards to the end of a word (words can contain punctuation)
b - jump backwards to the start of a word
B - jump backwards to the start of a word (words can contain punctuation)
ge - jump backwards to the end of a word
gE - jump backwards to the end of a word (words can contain punctuation)
% - move cursor to matching character (default supported pairs: '()', '{}', '[]' 
- use :h matchpairs in vim for more info)
0 - jump to the start of the line
^ - jump to the first non-blank character of the line
$ - jump to the end of the line
g_ - jump to the last non-blank character of the line
gg - go to the first line of the document
G - go to the last line of the document
5gg or 5G - go to line 5
gd - move to local declaration
gD - move to global declaration
fx - jump to next occurrence of character x
tx - jump to before next occurrence of character x
Fx - jump to the previous occurrence of character x
Tx - jump to after previous occurrence of character x
; - repeat previous f, t, F or T movement
, - repeat previous f, t, F or T movement, backwards
} - jump to next paragraph (or function/block, when editing code)
{ - jump to previous paragraph (or function/block, when editing code)
zz - center cursor on screen
zt - position cursor on top of the screen
zb - position cursor on bottom of the screen
Ctrl + e - move screen down one line (without moving cursor)
Ctrl + y - move screen up one line (without moving cursor)
Ctrl + b - move screen up one page (cursor to last line)
Ctrl + f - move screen down one page (cursor to first line)
Ctrl + d - move cursor and screen down 1/2 page
Ctrl + u - move cursor and screen up 1/2 page
Insert mode - inserting/appending text
i - insert before the cursor
I - insert at the beginning of the line
a - insert (append) after the cursor
A - insert (append) at the end of the line
o - append (open) a new line below the current line
O - append (open) a new line above the current line
ea - insert (append) at the end of the word
Ctrl + h - delete the character before the cursor during insert mode
Ctrl + w - delete word before the cursor during insert mode
Ctrl + j - add a line break at the cursor position during insert mode
Ctrl + t - indent (move right) line one shiftwidth during insert mode
Ctrl + d - de-indent (move left) line one shiftwidth during insert mode
Ctrl + n - insert (auto-complete) next match before the cursor during insert mode
Ctrl + p - insert (auto-complete) previous match before the cursor during insert mode
Ctrl + rx - insert the contents of register x
Ctrl + ox - Temporarily enter normal mode to issue one normal-mode command x.
Esc or Ctrl + c - exit insert mode
Editing
r - replace a single character.
R - replace more than one character, until ESC is pressed.
J - join line below to the current one with one space in between
gJ - join line below to the current one without space in between
gwip - reflow paragraph
g~ - switch case up to motion
gu - change to lowercase up to motion
gU - change to uppercase up to motion
cc - change (replace) entire line
c$ or C - change (replace) to the end of the line
ciw - change (replace) entire word
cw or ce - change (replace) to the end of the word
s - delete character and substitute text (same as cl)
S - delete line and substitute text (same as cc)
xp - transpose two letters (delete and paste)
u - undo
U - restore (undo) last changed line
Ctrl + r - redo
. - repeat last command
Marking text (visual mode)
v - start visual mode, mark lines, then do a command (like y-yank)
V - start linewise visual mode
o - move to other end of marked area
Ctrl + v - start visual block mode
O - move to other corner of block
aw - mark a word
ab - a block with ()
aB - a block with {}
at - a block with <> tags
ib - inner block with ()
iB - inner block with {}
it - inner block with <> tags
Esc or Ctrl + c - exit visual mode
Visual commands
> - shift text right
< - shift text left
y - yank (copy) marked text
d - delete marked text
~ - switch case
u - change marked text to lowercase
U - change marked text to uppercase
Registers
:reg[isters] - show registers content
"xy - yank into register x
"xp - paste contents of register x
"+y - yank into the system clipboard register
"+p - paste from the system clipboard register
Tip Registers are being stored in ~/.viminfo, and will be loaded again on next restart of vim.
Special registers:
0 - last yank
" - unnamed register, last delete or yank
% - current file name
# - alternate file name
* - clipboard contents (X11 primary)
+ - clipboard contents (X11 clipboard)
/ - last search pattern
: - last command-line
. - last inserted text
- - last small (less than a line) delete
= - expression register
_ - black hole register
Marks and positions
:marks - list of marks
ma - set current position for mark A
`a - jump to position of mark A
y`a - yank text to position of mark A
`0 - go to the position where Vim was previously exited
`" - go to the position when last editing this file
`. - go to the position of the last change in this file
`` - go to the position before the last jump
:ju[mps] - list of jumps
Ctrl + i - go to newer position in jump list
Ctrl + o - go to older position in jump list
:changes - list of changes
g, - go to newer position in change list
g; - go to older position in change list
Ctrl + ] - jump to the tag under cursor
Tip To jump to a mark you can either use a backtick (`) or an apostrophe (').
Using an apostrophe jumps to the beginning (first non-blank) of the line holding the mark.
Macros
qa - record macro a
q - stop recording macro
@a - run macro a
@@ - rerun last run macro
Cut and paste
yy - yank (copy) a line
2yy - yank (copy) 2 lines
yw - yank (copy) the characters of the word from the cursor position to the start of the next word
yiw - yank (copy) word under the cursor
yaw - yank (copy) word under the cursor and the space after or before it
y$ or Y - yank (copy) to end of line
p - put (paste) the clipboard after cursor
P - put (paste) before cursor
gp - put (paste) the clipboard after cursor and leave cursor after the new text
gP - put (paste) before cursor and leave cursor after the new text
dd - delete (cut) a line
2dd - delete (cut) 2 lines
dw - delete (cut) the characters of the word from the cursor position to the start of the next word
diw - delete (cut) word under the cursor
daw - delete (cut) word under the cursor and the space after or before it
:3,5d - delete lines starting from 3 to 5
Tip You can also use the following characters to specify the range:
e.g.
:.,$d - From the current line to the end of the file
:.,1d - From the current line to the beginning of the file
:10,1d - From the 10th line to the beginning of the file
:g/{pattern}/d - delete all lines containing pattern
:g!/{pattern}/d - delete all lines not containing pattern
d$ or D - delete (cut) to the end of the line
x - delete (cut) character
Indent text
>> - indent (move right) line one shiftwidth
<< - de-indent (move left) line one shiftwidth
>% - indent a block with () or {} (cursor on brace)
<% - de-indent a block with () or {} (cursor on brace)
>ib - indent inner block with ()
>at - indent a block with <> tags
3== - re-indent 3 lines
=% - re-indent a block with () or {} (cursor on brace)
=iB - re-indent inner block with {}
gg=G - re-indent entire buffer
]p - paste and adjust indent to current line
Exiting
:w - write (save) the file, but don't exit
:w !sudo tee % - write out the current file using sudo
:wq or :x or ZZ - write (save) and quit
:q - quit (fails if there are unsaved changes)
:q! or ZQ - quit and throw away unsaved changes
:wqa - write (save) and quit on all tabs
Search and replace
/pattern - search for pattern
?pattern - search backward for pattern
\vpattern - 'very magic' pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)
n - repeat search in same direction
N - repeat search in opposite direction
:%s/old/new/g - replace all old with new throughout file
:%s/old/new/gc - replace all old with new throughout file with confirmations
:noh[lsearch] - remove highlighting of search matches
Search in multiple files
:vim[grep] /pattern/ {`{file}`} - search for pattern in multiple files
e.g. :vim[grep] /foo/ **/*
:cn[ext] - jump to the next match
:cp[revious] - jump to the previous match
:cope[n] - open a window containing the list of matches
:ccl[ose] - close the quickfix window
Tabs
:tabnew or :tabnew {page.words.file} - open a file in a new tab
Ctrl + wT - move the current split window into its own tab
gt or :tabn[ext] - move to the next tab
gT or :tabp[revious] - move to the previous tab
#gt - move to tab number #
:tabm[ove] # - move current tab to the #th position (indexed from 0)
:tabc[lose] - close the current tab and all its windows
:tabo[nly] - close all tabs except for the current one
:tabdo command - run the command on all tabs (e.g. :tabdo q - closes all opened tabs)
Working with multiple files
:e[dit] file - edit a file in a new buffer
:bn[ext] - go to the next buffer
:bp[revious] - go to the previous buffer
:bd[elete] - delete a buffer (close a file)
:b[uffer]# - go to a buffer by index #
:b[uffer] file - go to a buffer by file
:ls or :buffers - list all open buffers
:sp[lit] file - open a file in a new buffer and split window
:vs[plit] file - open a file in a new buffer and vertically split window
:vert[ical] ba[ll] - edit all buffers as vertical windows
:tab ba[ll] - edit all buffers as tabs
Ctrl + ws - split window
Ctrl + wv - split window vertically
Ctrl + ww - switch windows
Ctrl + wq - quit a window
Ctrl + wx - exchange current window with next one
Ctrl + w= - make all windows equal height & width
Ctrl + wh - move cursor to the left window (vertical split)
Ctrl + wl - move cursor to the right window (vertical split)
Ctrl + wj - move cursor to the window below (horizontal split)
Ctrl + wk - move cursor to the window above (horizontal split)
Ctrl + wH - make current window full height at far left (leftmost vertical window)
Ctrl + wL - make current window full height at far right (rightmost vertical window)
Ctrl + wJ - make current window full width at the very bottom (bottommost horizontal window)
Ctrl + wK - make current window full width at the very top (topmost horizontal window)
Diff
zf - manually define a fold up to motion
zd - delete fold under the cursor
za - toggle fold under the cursor
zo - open fold under the cursor
zc - close fold under the cursor
zr - reduce (open) all folds by one level
zm - fold more (close) all folds by one level
zi - toggle folding functionality
]c - jump to start of next change
[c - jump to start of previous change
do or :diffg[et] - obtain (get) difference (from other buffer)
dp or :diffpu[t] - put difference (to other buffer)
:diffthis - make current window part of diff
:dif[fupdate] - update differences
:diffo[ff] - switch off diff mode for current window

#######################################################################################################
Processing file: padomatic
                 _                       _   _      
 _ __   __ _  __| | ___  _ __ ___   __ _| |_(_) ___ 
| '_ \ / _` |/ _` |/ _ \| '_ ` _ \ / _` | __| |/ __|
| |_) | (_| | (_| | (_) | | | | | | (_| | |_| | (__ 
| .__/ \__,_|\__,_|\___/|_| |_| |_|\__,_|\__|_|\___|
|_|                                                 
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp1=/tmp/$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp1"' EXIT
rm -f "$Tmp"  >/dev/null 2>&1
rm -f "$Tmp1"  >/dev/null 2>&1
#================================================================
# paste -d' ' file1 file2 > output_file

source ~/bash.library

# Get the filename from the command-line argument
filename="$1"

# Check if a filename is provided
if [ -z "$filename" ]; then
  echo "Usage: $0 <filename>"
  exit 1
fi

# Check if the file exists
if [ ! -f "$filename" ]; then
  echo "Error: File '$filename' not found."
  exit 1
fi

backup_file  "$filename"   ~/BACKUPS

sed 's/[[:space:]]*$//' "$filename" > $Tmp

# Find the longest line length
max_len=$(wc -L "$Tmp" | awk '{print $1}')

# Calculate the padding length
padding_length=$((max_len + 1))

# Create a temporary file to store the padded content
temp_file=$(mktemp)

# Iterate through each line of the file and pad it
while IFS= read -r line; do
  printf "%-${padding_length}s\n" "$line" >> "$temp_file" # Pad to the right
done  < "$Tmp"

# Replace the original file with the padded content
cat "$temp_file"  >   "$filename"

# echo "File '$filename' padded successfully."

#######################################################################################################
Processing file: rmLeadingWhiteSpace
                _                   _ _           __        ___     _ _       
 _ __ _ __ ___ | |    ___  __ _  __| (_)_ __   __ \ \      / / |__ (_) |_ ___ 
| '__| '_ ` _ \| |   / _ \/ _` |/ _` | | '_ \ / _` \ \ /\ / /| '_ \| | __/ _ \
| |  | | | | | | |__|  __/ (_| | (_| | | | | | (_| |\ V  V / | | | | | ||  __/
|_|  |_| |_| |_|_____\___|\__,_|\__,_|_|_| |_|\__, | \_/\_/  |_| |_|_|\__\___|
                                              |___/                           
 ____                       
/ ___| _ __   __ _  ___ ___ 
\___ \| '_ \ / _` |/ __/ _ \
 ___) | |_) | (_| | (_|  __/
|____/| .__/ \__,_|\___\___|
      |_|                   
sed -i 's/^[[:space:]]*//' "$1"

#######################################################################################################
Processing file: template.html
 _                       _       _         _     _             _ 
| |_ ___ _ __ ___  _ __ | | __ _| |_ ___  | |__ | |_ _ __ ___ | |
| __/ _ \ '_ ` _ \| '_ \| |/ _` | __/ _ \ | '_ \| __| '_ ` _ \| |
| ||  __/ | | | | | |_) | | (_| | ||  __/_| | | | |_| | | | | | |
 \__\___|_| |_| |_| .__/|_|\__,_|\__\___(_)_| |_|\__|_| |_| |_|_|
                  |_|                                            
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="date" content='$date-meta$'>
    <title>$title$</title>
  </head>
  <body>
      <link rel="stylesheet" href="markdown.css">
    <p>Date: $date$</p>
$body$
  </body>
</html>


#######################################################################################################
Processing file: tt
 _   _   
| |_| |_ 
| __| __|
| |_| |_ 
 \__|\__|
         
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp0" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3"  >/dev/null 2>&1;


egrep "(function.*[(][)])|(Function-Args)" bash.library |  \
      sed 's/function //' |                     \
      sed -e 's/[ ]*{$//' |                     \
      sed 's/^[[:space:]]*//' |                 \
      sed 's/[[:space:]]*$//' |                 \
      sed -e 's/[#].*$//'     |                 \
      gawk '
      {
          if ( NR == 1 ) {
              prevline=$0
              next
          }
          else {
              if ( $0 ~ /local/) {
                  gsub(/local[ ]*/, "", $0);
                  gsub(/=..../, "", $0);
                  gsub(/;/, ",", $0);
                  print prevline "," $0
              }
              else {
                  prevline=$0
              }
          }
      }' > $Tmp


cat "$Tmp"














# source ~/bash.library
#   # Iterate through each line of the file and pad it
#   while IFS= read -r line; do
#     echo "         1         2         3         4         5         6         7"
#     echo "1234567890123456789012345678901234567890123456789012345678901234567890"
#     justify_line "$line" "44"
#   done < "vim.raw"

#######################################################################################################
Processing file: update
                 _       _       
 _   _ _ __   __| | __ _| |_ ___ 
| | | | '_ \ / _` |/ _` | __/ _ \
| |_| | |_) | (_| | (_| | ||  __/
 \__,_| .__/ \__,_|\__,_|\__\___|
      |_|                        
#!/usr/bin/bash
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp0" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3"  >/dev/null 2>&1;

source ~/bash.library

UPDATE="NO"
while getopts "ruls" arg
do
    case $arg in
        r) UPDATE="REMOTE"
           ;;
        u) UPDATE="REMOTE"
           ;;
        l) UPDATE="LOCAL"
           ;;
        s) UPDATE="STATUS"
           ;;
    esac
done
shift $(($OPTIND - 1))

if [ "$UPDATE" == "YES" ]; then                                                                                               
    RETVAL="YES"                                                                                                             
else                                                                                                                         
    RETVAL="NO"                                                                                                              
fi                                                                                                                           

create_markdown_table() {
  local input_file="$1"

  # Check if the input file exists
  if [[ ! -f "$input_file" ]]; then
    echo "Error: Input file '$input_file' not found."
    return 1
  fi

  # Read lines from the file and create table rows
  local line_count=0
  local row=""
  local first_row=1

  while IFS= read -r line; do
    if [[ $line_count -eq 0 ]]; then
      if [[ $first_row -eq 1 ]]; then
          #echo "| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |"
          echo "|    A     |    B     |    C     |    D     |    E     |"
          echo "|----------|----------|----------|----------|----------|"
          first_row=0
      fi
    fi

    row+="| $line "

    line_count=$((line_count + 1))

    if [[ $line_count -eq 5 ]]; then
      echo "$row|"
      row=""
      line_count=0
    fi
  done < "$input_file"

  # Handle remaining lines if the total line count is not a multiple of 5
  if [[ $line_count -gt 0 ]]; then
    for ((i = line_count; i < 5; i++)); do
        row+="|  "
    done
    echo "$row|"
  fi
}

# Example usage (if you want to test it with a file named "input.txt"):
# create_markdown_table "input.txt"

D=`date`

FILE="./.vimrc"
if [ $(isSameHash "$FILE") == "0" ]; then

    grep -v DATEOMATIC "$FILE" | grep -v HASHOMATIC > $Tmp
    IHASH=$(md5sum "$Tmp" | awk '{print $1}')
    echo "\" *********************************************************DATEOMATIC: $D"      > $Tmp1
    echo "\" *********************************************************HASHOMATIC: $IHASH" >> $Tmp1
    cat $Tmp  >> $Tmp1
    cat $Tmp1  > "$FILE"
    git add "$FILE"
fi


FILE="./.bashrc"
if [ $(isSameHash "$FILE") == "0" ]; then

    grep -v DATEOMATIC "$FILE" | grep -v HASHOMATIC > $Tmp
    IHASH=$(md5sum "$Tmp" | awk '{print $1}')
    echo "# *********************************************************DATEOMATIC: $D"      > $Tmp1
    echo "# *********************************************************HASHOMATIC: $IHASH" >> $Tmp1
    cat $Tmp  >> $Tmp1
    cat $Tmp1  > "$FILE"
    git add "$FILE"
fi


FILE="./bashrc.shared"
if [ $(isSameHash "$FILE") == "0" ]; then

    grep -v DATEOMATIC "$FILE" | grep -v HASHOMATIC > $Tmp
    IHASH=$(md5sum "$Tmp" | awk '{print $1}')
    echo "# *********************************************************DATEOMATIC: $D"      > $Tmp1
    echo "# *********************************************************HASHOMATIC: $IHASH" >> $Tmp1
    cat $Tmp  >> $Tmp1
    cat $Tmp1  > "$FILE"
    git add "$FILE"
fi

FILE="./bash.library"
if [ $(isSameHash "$FILE") == "0" ]; then

    grep -v DATEOMATIC "$FILE" | grep -v HASHOMATIC > $Tmp
    IHASH=$(md5sum "$Tmp" | awk '{print $1}')
    echo "# *********************************************************DATEOMATIC: $D"      > $Tmp1
    echo "# *********************************************************HASHOMATIC: $IHASH" >> $Tmp1
    cat $Tmp  >> $Tmp1
    cat $Tmp1  > "$FILE"
    git add "$FILE"
fi

FILE="./gawk.library"
if [ $(isSameHash "$FILE") == "0" ]; then

    grep -v DATEOMATIC "$FILE" | grep -v HASHOMATIC > $Tmp
    IHASH=$(md5sum "$Tmp" | awk '{print $1}')
    echo "# *********************************************************DATEOMATIC: $D"      > $Tmp1
    echo "# *********************************************************HASHOMATIC: $IHASH" >> $Tmp1
    cat $Tmp  >> $Tmp1
    cat $Tmp1  > "$FILE"
    git add "$FILE"
fi

git ls-files | gawk '
BEGIN {
    BASE="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/"
}
{
    print BASE $0
}' > get.raw
git add get.raw

rm -f "$Tmp"  >/dev/null 2>&1;



grep bash get.raw | gawk '{print "wget " $0}' > getme
git add getme

#cat get.raw |sort|uniq| gawk ' {n=split($0,A,"/");print "[" A[n] "](" $0 ")"}' > $Tmp
cat get.raw |sort|uniq  > $Tmp
create_markdown_table4 "$Tmp" "MAKELINKS"   > README.md
echo ""     >> README.md
echo ""     >> README.md

ls *omatic > $Tmp
create_markdown_table4 "$Tmp"  >> README.md
echo ""     >> README.md
echo ""     >> README.md

echo "## bash.library includes"     >> README.md
echo ""     >> README.md

# grep function bash.library | grep "()" | sed 's/function //' | sed -e 's/[ ]*{$//' > $Tmp
egrep "(function.*[(][)])|(Function-Args)" bash.library | grep "()" | sed 's/function //' | sed -e 's/[ ]*{$//' > $Tmp

create_markdown_table4 "$Tmp"  >> README.md
echo ""     >> README.md
echo ""     >> README.md

./listing   >> README.md
pandoc --standalone --template template.html README.md > local.html
git add README.md

rm -f zed zzed zerd qed qqed fed ffed xx yy xxx yyy moe

if [ "$UPDATE" == "LOCAL" ]; then                                                                                               
    git commit  -m "Update"
    git status
fi
if [ "$UPDATE" == "REMOTE" ]; then                                                                                               
    git commit  -m "Update"
    git push -u origin master
    git status
fi
if [ "$UPDATE" == "STATUS" ]; then                                                                                               
    git status
fi







# FHASH=`cat ./.vimrc | gawk  ' /HASHOMATIC/ {n=split($0,A," ");h=A[n];gsub(/ +$/, "", h);print h;}'`

#######################################################################################################
Processing file: vim.raw
       _                                
__   _(_)_ __ ___    _ __ __ ___      __
\ \ / / | '_ ` _ \  | '__/ _` \ \ /\ / /
 \ V /| | | | | | |_| | | (_| |\ V  V / 
  \_/ |_|_| |_| |_(_)_|  \__,_| \_/\_/  
                                        
Global

:h[elp] keyword - open help for keyword
:sav[eas] file - save file as
:clo[se] - close current pane
:ter[minal] - open a terminal window
K - open man page for word under the cursor
Tip Run vimtutor in a terminal to learn the first Vim commands.

Cursor movement

h - move cursor left
j - move cursor down
k - move cursor up
l - move cursor right
gj - move cursor down (multi-line text)
gk - move cursor up (multi-line text)
H - move to top of screen
M - move to middle of screen
L - move to bottom of screen
w - jump forwards to the start of a word
W - jump forwards to the start of a word (words can contain punctuation)
e - jump forwards to the end of a word
E - jump forwards to the end of a word (words can contain punctuation)
b - jump backwards to the start of a word
B - jump backwards to the start of a word (words can contain punctuation)
ge - jump backwards to the end of a word
gE - jump backwards to the end of a word (words can contain punctuation)
% - move cursor to matching character (default supported pairs: '()', '{}', '[]' 
- use :h matchpairs in vim for more info)
0 - jump to the start of the line
^ - jump to the first non-blank character of the line
$ - jump to the end of the line
g_ - jump to the last non-blank character of the line
gg - go to the first line of the document
G - go to the last line of the document
5gg or 5G - go to line 5
gd - move to local declaration
gD - move to global declaration
fx - jump to next occurrence of character x
tx - jump to before next occurrence of character x
Fx - jump to the previous occurrence of character x
Tx - jump to after previous occurrence of character x
; - repeat previous f, t, F or T movement
, - repeat previous f, t, F or T movement, backwards
} - jump to next paragraph (or function/block, when editing code)
{ - jump to previous paragraph (or function/block, when editing code)
zz - center cursor on screen
zt - position cursor on top of the screen
zb - position cursor on bottom of the screen
Ctrl + e - move screen down one line (without moving cursor)
Ctrl + y - move screen up one line (without moving cursor)
Ctrl + b - move screen up one page (cursor to last line)
Ctrl + f - move screen down one page (cursor to first line)
Ctrl + d - move cursor and screen down 1/2 page
Ctrl + u - move cursor and screen up 1/2 page

Insert mode - inserting/appending text

i - insert before the cursor
I - insert at the beginning of the line
a - insert (append) after the cursor
A - insert (append) at the end of the line
o - append (open) a new line below the current line
O - append (open) a new line above the current line
ea - insert (append) at the end of the word
Ctrl + h - delete the character before the cursor during insert mode
Ctrl + w - delete word before the cursor during insert mode
Ctrl + j - add a line break at the cursor position during insert mode
Ctrl + t - indent (move right) line one shiftwidth during insert mode
Ctrl + d - de-indent (move left) line one shiftwidth during insert mode
Ctrl + n - insert (auto-complete) next match before the cursor during insert mode
Ctrl + p - insert (auto-complete) previous match before the cursor during insert mode
Ctrl + rx - insert the contents of register x
Ctrl + ox - Temporarily enter normal mode to issue one normal-mode command x.
Esc or Ctrl + c - exit insert mode

Editing

r - replace a single character.
R - replace more than one character, until ESC is pressed.
J - join line below to the current one with one space in between
gJ - join line below to the current one without space in between
gwip - reflow paragraph
g~ - switch case up to motion
gu - change to lowercase up to motion
gU - change to uppercase up to motion
cc - change (replace) entire line
c$ or C - change (replace) to the end of the line
ciw - change (replace) entire word
cw or ce - change (replace) to the end of the word
s - delete character and substitute text (same as cl)
S - delete line and substitute text (same as cc)
xp - transpose two letters (delete and paste)
u - undo
U - restore (undo) last changed line
Ctrl + r - redo
. - repeat last command

Marking text (visual mode)

v - start visual mode, mark lines, then do a command (like y-yank)
V - start linewise visual mode
o - move to other end of marked area
Ctrl + v - start visual block mode
O - move to other corner of block
aw - mark a word
ab - a block with ()
aB - a block with {}
at - a block with <> tags
ib - inner block with ()
iB - inner block with {}
it - inner block with <> tags
Esc or Ctrl + c - exit visual mode

Visual commands

> - shift text right
< - shift text left
y - yank (copy) marked text
d - delete marked text
~ - switch case
u - change marked text to lowercase
U - change marked text to uppercase

Registers

:reg[isters] - show registers content
"xy - yank into register x
"xp - paste contents of register x
"+y - yank into the system clipboard register
"+p - paste from the system clipboard register
Tip Registers are being stored in ~/.viminfo, and will be loaded again on next restart of vim.

Special registers:

0 - last yank
" - unnamed register, last delete or yank
% - current file name
# - alternate file name
* - clipboard contents (X11 primary)
+ - clipboard contents (X11 clipboard)
/ - last search pattern
: - last command-line
. - last inserted text
- - last small (less than a line) delete
= - expression register
_ - black hole register

Marks and positions

:marks - list of marks
ma - set current position for mark A
`a - jump to position of mark A
y`a - yank text to position of mark A
`0 - go to the position where Vim was previously exited
`" - go to the position when last editing this file
`. - go to the position of the last change in this file
`` - go to the position before the last jump
:ju[mps] - list of jumps
Ctrl + i - go to newer position in jump list
Ctrl + o - go to older position in jump list
:changes - list of changes
g, - go to newer position in change list
g; - go to older position in change list
Ctrl + ] - jump to the tag under cursor
Tip To jump to a mark you can either use a backtick (`) or an apostrophe (').
Using an apostrophe jumps to the beginning (first non-blank) of the line holding the mark.

Macros

qa - record macro a
q - stop recording macro
@a - run macro a
@@ - rerun last run macro

Cut and paste

yy - yank (copy) a line
2yy - yank (copy) 2 lines
yw - yank (copy) the characters of the word from the cursor position to the start of the next word
yiw - yank (copy) word under the cursor
yaw - yank (copy) word under the cursor and the space after or before it
y$ or Y - yank (copy) to end of line
p - put (paste) the clipboard after cursor
P - put (paste) before cursor
gp - put (paste) the clipboard after cursor and leave cursor after the new text
gP - put (paste) before cursor and leave cursor after the new text
dd - delete (cut) a line
2dd - delete (cut) 2 lines
dw - delete (cut) the characters of the word from the cursor position to the start of the next word
diw - delete (cut) word under the cursor
daw - delete (cut) word under the cursor and the space after or before it
:3,5d - delete lines starting from 3 to 5
Tip You can also use the following characters to specify the range:
e.g.
:.,$d - From the current line to the end of the file
:.,1d - From the current line to the beginning of the file
:10,1d - From the 10th line to the beginning of the file
:g/{pattern}/d - delete all lines containing pattern
:g!/{pattern}/d - delete all lines not containing pattern
d$ or D - delete (cut) to the end of the line
x - delete (cut) character

Indent text

>> - indent (move right) line one shiftwidth
<< - de-indent (move left) line one shiftwidth
>% - indent a block with () or {} (cursor on brace)
<% - de-indent a block with () or {} (cursor on brace)
>ib - indent inner block with ()
>at - indent a block with <> tags
3== - re-indent 3 lines
=% - re-indent a block with () or {} (cursor on brace)
=iB - re-indent inner block with {}
gg=G - re-indent entire buffer
]p - paste and adjust indent to current line

Exiting

:w - write (save) the file, but don't exit
:w !sudo tee % - write out the current file using sudo
:wq or :x or ZZ - write (save) and quit
:q - quit (fails if there are unsaved changes)
:q! or ZQ - quit and throw away unsaved changes
:wqa - write (save) and quit on all tabs

Search and replace

/pattern - search for pattern
?pattern - search backward for pattern
\vpattern - 'very magic' pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)
n - repeat search in same direction
N - repeat search in opposite direction
:%s/old/new/g - replace all old with new throughout file
:%s/old/new/gc - replace all old with new throughout file with confirmations
:noh[lsearch] - remove highlighting of search matches

Search in multiple files

:vim[grep] /pattern/ {`{file}`} - search for pattern in multiple files
e.g. :vim[grep] /foo/ **/*
:cn[ext] - jump to the next match
:cp[revious] - jump to the previous match
:cope[n] - open a window containing the list of matches
:ccl[ose] - close the quickfix window

Tabs

:tabnew or :tabnew {page.words.file} - open a file in a new tab
Ctrl + wT - move the current split window into its own tab
gt or :tabn[ext] - move to the next tab
gT or :tabp[revious] - move to the previous tab
#gt - move to tab number #
:tabm[ove] # - move current tab to the #th position (indexed from 0)
:tabc[lose] - close the current tab and all its windows
:tabo[nly] - close all tabs except for the current one
:tabdo command - run the command on all tabs (e.g. :tabdo q - closes all opened tabs)

Working with multiple files

:e[dit] file - edit a file in a new buffer
:bn[ext] - go to the next buffer
:bp[revious] - go to the previous buffer
:bd[elete] - delete a buffer (close a file)
:b[uffer]# - go to a buffer by index #
:b[uffer] file - go to a buffer by file
:ls or :buffers - list all open buffers
:sp[lit] file - open a file in a new buffer and split window
:vs[plit] file - open a file in a new buffer and vertically split window
:vert[ical] ba[ll] - edit all buffers as vertical windows
:tab ba[ll] - edit all buffers as tabs
Ctrl + ws - split window
Ctrl + wv - split window vertically
Ctrl + ww - switch windows
Ctrl + wq - quit a window
Ctrl + wx - exchange current window with next one
Ctrl + w= - make all windows equal height & width
Ctrl + wh - move cursor to the left window (vertical split)
Ctrl + wl - move cursor to the right window (vertical split)
Ctrl + wj - move cursor to the window below (horizontal split)
Ctrl + wk - move cursor to the window above (horizontal split)
Ctrl + wH - make current window full height at far left (leftmost vertical window)
Ctrl + wL - make current window full height at far right (rightmost vertical window)
Ctrl + wJ - make current window full width at the very bottom (bottommost horizontal window)
Ctrl + wK - make current window full width at the very top (topmost horizontal window)

Diff

zf - manually define a fold up to motion
zd - delete fold under the cursor
za - toggle fold under the cursor
zo - open fold under the cursor
zc - close fold under the cursor
zr - reduce (open) all folds by one level
zm - fold more (close) all folds by one level
zi - toggle folding functionality
]c - jump to start of next change
[c - jump to start of previous change
do or :diffg[et] - obtain (get) difference (from other buffer)
dp or :diffpu[t] - put difference (to other buffer)
:diffthis - make current window part of diff
:dif[fupdate] - update differences
:diffo[ff] - switch off diff mode for current window

#######################################################################################################
Processing file: vim.txt
       _            _        _   
__   _(_)_ __ ___  | |___  _| |_ 
\ \ / / | '_ ` _ \ | __\ \/ / __|
 \ V /| | | | | | || |_ >  <| |_ 
  \_/ |_|_| |_| |_(_)__/_/\_\\__|
                                 
Global

    :h[elp] keyword - open help for keyword
    :sav[eas] file - save file as
    :clo[se] - close current pane
    :ter[minal] - open a terminal window
    K - open man page for word under the cursor
    Tip Run vimtutor in a terminal to learn the first Vim commands.

Cursor movement

    h - move cursor left
    j - move cursor down
    k - move cursor up
    l - move cursor right
    gj - move cursor down (multi-line text)
    gk - move cursor up (multi-line text)
    H - move to top of screen
    M - move to middle of screen
    L - move to bottom of screen
    w - jump forwards to the start of a word
    W - jump forwards to the start of a word (words can contain punctuation)
    e - jump forwards to the end of a word
    E - jump forwards to the end of a word (words can contain punctuation)
    b - jump backwards to the start of a word
    B - jump backwards to the start of a word (words can contain punctuation)
    ge - jump backwards to the end of a word
    gE - jump backwards to the end of a word (words can contain punctuation)
    % - move cursor to matching character (default supported pairs: '()', '{}', '[]' 
      - use :h matchpairs in vim for more info)
    0 - jump to the start of the line
    ^ - jump to the first non-blank character of the line
    $ - jump to the end of the line
    g_ - jump to the last non-blank character of the line
    gg - go to the first line of the document
    G - go to the last line of the document
    5gg or 5G - go to line 5
    gd - move to local declaration
    gD - move to global declaration
    fx - jump to next occurrence of character x
    tx - jump to before next occurrence of character x
    Fx - jump to the previous occurrence of character x
    Tx - jump to after previous occurrence of character x
    ; - repeat previous f, t, F or T movement
    , - repeat previous f, t, F or T movement, backwards
    } - jump to next paragraph (or function/block, when editing code)
    { - jump to previous paragraph (or function/block, when editing code)
    zz - center cursor on screen
    zt - position cursor on top of the screen
    zb - position cursor on bottom of the screen
    Ctrl + e - move screen down one line (without moving cursor)
    Ctrl + y - move screen up one line (without moving cursor)
    Ctrl + b - move screen up one page (cursor to last line)
    Ctrl + f - move screen down one page (cursor to first line)
    Ctrl + d - move cursor and screen down 1/2 page
    Ctrl + u - move cursor and screen up 1/2 page

Insert mode - inserting/appending text

    i - insert before the cursor
    I - insert at the beginning of the line
    a - insert (append) after the cursor
    A - insert (append) at the end of the line
    o - append (open) a new line below the current line
    O - append (open) a new line above the current line
    ea - insert (append) at the end of the word
    Ctrl + h - delete the character before the cursor during insert mode
    Ctrl + w - delete word before the cursor during insert mode
    Ctrl + j - add a line break at the cursor position during insert mode
    Ctrl + t - indent (move right) line one shiftwidth during insert mode
    Ctrl + d - de-indent (move left) line one shiftwidth during insert mode
    Ctrl + n - insert (auto-complete) next match before the cursor during insert mode
    Ctrl + p - insert (auto-complete) previous match before the cursor during insert mode
    Ctrl + rx - insert the contents of register x
    Ctrl + ox - Temporarily enter normal mode to issue one normal-mode command x.
    Esc or Ctrl + c - exit insert mode

Editing

    r - replace a single character.
    R - replace more than one character, until ESC is pressed.
    J - join line below to the current one with one space in between
    gJ - join line below to the current one without space in between
    gwip - reflow paragraph
    g~ - switch case up to motion
    gu - change to lowercase up to motion
    gU - change to uppercase up to motion
    cc - change (replace) entire line
    c$ or C - change (replace) to the end of the line
    ciw - change (replace) entire word
    cw or ce - change (replace) to the end of the word
    s - delete character and substitute text (same as cl)
    S - delete line and substitute text (same as cc)
    xp - transpose two letters (delete and paste)
    u - undo
    U - restore (undo) last changed line
    Ctrl + r - redo
    . - repeat last command

Marking text (visual mode)

    v - start visual mode, mark lines, then do a command (like y-yank)
    V - start linewise visual mode
    o - move to other end of marked area
    Ctrl + v - start visual block mode
    O - move to other corner of block
    aw - mark a word
    ab - a block with ()
    aB - a block with {}
    at - a block with <> tags
    ib - inner block with ()
    iB - inner block with {}
    it - inner block with <> tags
    Esc or Ctrl + c - exit visual mode

Visual commands

    > - shift text right
    < - shift text left
    y - yank (copy) marked text
    d - delete marked text
    ~ - switch case
    u - change marked text to lowercase
    U - change marked text to uppercase

Registers

    :reg[isters] - show registers content
    "xy - yank into register x
    "xp - paste contents of register x
    "+y - yank into the system clipboard register
    "+p - paste from the system clipboard register
    Tip Registers are being stored in ~/.viminfo, and will be loaded again on next restart of vim.

Special registers:

    0 - last yank
    " - unnamed register, last delete or yank
    % - current file name
    # - alternate file name
    * - clipboard contents (X11 primary)
    + - clipboard contents (X11 clipboard)
    / - last search pattern
    : - last command-line
    . - last inserted text
    - - last small (less than a line) delete
    = - expression register
    _ - black hole register

Marks and positions

    :marks - list of marks
    ma - set current position for mark A
    `a - jump to position of mark A
    y`a - yank text to position of mark A
    `0 - go to the position where Vim was previously exited
    `" - go to the position when last editing this file
    `. - go to the position of the last change in this file
    `` - go to the position before the last jump
    :ju[mps] - list of jumps
    Ctrl + i - go to newer position in jump list
    Ctrl + o - go to older position in jump list
    :changes - list of changes
    g, - go to newer position in change list
    g; - go to older position in change list
    Ctrl + ] - jump to the tag under cursor
    Tip To jump to a mark you can either use a backtick (`) or an apostrophe (').
    Using an apostrophe jumps to the beginning (first non-blank) of the line holding the mark.

Macros

    qa - record macro a
    q - stop recording macro
    @a - run macro a
    @@ - rerun last run macro

Cut and paste

    yy - yank (copy) a line
    2yy - yank (copy) 2 lines
    yw - yank (copy) the characters of the word from the cursor position to the start of the next word
    yiw - yank (copy) word under the cursor
    yaw - yank (copy) word under the cursor and the space after or before it
    y$ or Y - yank (copy) to end of line
    p - put (paste) the clipboard after cursor
    P - put (paste) before cursor
    gp - put (paste) the clipboard after cursor and leave cursor after the new text
    gP - put (paste) before cursor and leave cursor after the new text
    dd - delete (cut) a line
    2dd - delete (cut) 2 lines
    dw - delete (cut) the characters of the word from the cursor position to the start of the next word
    diw - delete (cut) word under the cursor
    daw - delete (cut) word under the cursor and the space after or before it
    :3,5d - delete lines starting from 3 to 5
    Tip You can also use the following characters to specify the range:
    e.g.
        :.,$d - From the current line to the end of the file
        :.,1d - From the current line to the beginning of the file
        :10,1d - From the 10th line to the beginning of the file
    :g/{pattern}/d - delete all lines containing pattern
    :g!/{pattern}/d - delete all lines not containing pattern
    d$ or D - delete (cut) to the end of the line
    x - delete (cut) character

Indent text

    >> - indent (move right) line one shiftwidth
    << - de-indent (move left) line one shiftwidth
    >% - indent a block with () or {} (cursor on brace)
    <% - de-indent a block with () or {} (cursor on brace)
    >ib - indent inner block with ()
    >at - indent a block with <> tags
    3== - re-indent 3 lines
    =% - re-indent a block with () or {} (cursor on brace)
    =iB - re-indent inner block with {}
    gg=G - re-indent entire buffer
    ]p - paste and adjust indent to current line

Exiting

    :w - write (save) the file, but don't exit
    :w !sudo tee % - write out the current file using sudo
    :wq or :x or ZZ - write (save) and quit
    :q - quit (fails if there are unsaved changes)
    :q! or ZQ - quit and throw away unsaved changes
    :wqa - write (save) and quit on all tabs

Search and replace

    /pattern - search for pattern
    ?pattern - search backward for pattern
    \vpattern - 'very magic' pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)
    n - repeat search in same direction
    N - repeat search in opposite direction
    :%s/old/new/g - replace all old with new throughout file
    :%s/old/new/gc - replace all old with new throughout file with confirmations
    :noh[lsearch] - remove highlighting of search matches

Search in multiple files

    :vim[grep] /pattern/ {`{file}`} - search for pattern in multiple files
    e.g. :vim[grep] /foo/ **/*
        :cn[ext] - jump to the next match
        :cp[revious] - jump to the previous match
        :cope[n] - open a window containing the list of matches
        :ccl[ose] - close the quickfix window

Tabs

    :tabnew or :tabnew {page.words.file} - open a file in a new tab
    Ctrl + wT - move the current split window into its own tab
    gt or :tabn[ext] - move to the next tab
    gT or :tabp[revious] - move to the previous tab
    #gt - move to tab number #
    :tabm[ove] # - move current tab to the #th position (indexed from 0)
    :tabc[lose] - close the current tab and all its windows
    :tabo[nly] - close all tabs except for the current one
    :tabdo command - run the command on all tabs (e.g. :tabdo q - closes all opened tabs)

Working with multiple files

    :e[dit] file - edit a file in a new buffer
    :bn[ext] - go to the next buffer
    :bp[revious] - go to the previous buffer
    :bd[elete] - delete a buffer (close a file)
    :b[uffer]# - go to a buffer by index #
    :b[uffer] file - go to a buffer by file
    :ls or :buffers - list all open buffers
    :sp[lit] file - open a file in a new buffer and split window
    :vs[plit] file - open a file in a new buffer and vertically split window
    :vert[ical] ba[ll] - edit all buffers as vertical windows
    :tab ba[ll] - edit all buffers as tabs
    Ctrl + ws - split window
    Ctrl + wv - split window vertically
    Ctrl + ww - switch windows
    Ctrl + wq - quit a window
    Ctrl + wx - exchange current window with next one
    Ctrl + w= - make all windows equal height & width
    Ctrl + wh - move cursor to the left window (vertical split)
    Ctrl + wl - move cursor to the right window (vertical split)
    Ctrl + wj - move cursor to the window below (horizontal split)
    Ctrl + wk - move cursor to the window above (horizontal split)
    Ctrl + wH - make current window full height at far left (leftmost vertical window)
    Ctrl + wL - make current window full height at far right (rightmost vertical window)
    Ctrl + wJ - make current window full width at the very bottom (bottommost horizontal window)
    Ctrl + wK - make current window full width at the very top (topmost horizontal window)

Diff

    zf - manually define a fold up to motion
    zd - delete fold under the cursor
    za - toggle fold under the cursor
    zo - open fold under the cursor
    zc - close fold under the cursor
    zr - reduce (open) all folds by one level
    zm - fold more (close) all folds by one level
    zi - toggle folding functionality
    ]c - jump to start of next change
    [c - jump to start of previous change
    do or :diffg[et] - obtain (get) difference (from other buffer)
    dp or :diffpu[t] - put difference (to other buffer)
    :diffthis - make current window part of diff
    :dif[fupdate] - update differences
    :diffo[ff] - switch off diff mode for current window
```
