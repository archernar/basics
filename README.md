| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
|----------|----------|----------|----------|----------|----------|
| [.bashrc](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.bashrc) | [.vimrc](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.vimrc) | [README.md](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/README.md) | [bash.functions](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.functions) | [bash.justhelp](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.justhelp) | [bashrc.shared](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashrc.shared) |
| [bashtop](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashtop) | [deploy](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/deploy) | [fred](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/fred) | [gDiff](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gDiff) | [gHardSync](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gHardSync) | [gLocal](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gLocal) |
| [gStatus](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gStatus) | [gUpdate](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdate) | [gUpdateFromOrigin](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdateFromOrigin) | [get.raw](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/get.raw) | [getme](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/getme) | [listing](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/listing) |
| [make](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/make) | [newbashscript](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/newbashscript) | [notes](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/notes) | [other](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/other) | [setgit](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/setgit) | [testtest](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/testtest) |
| [update](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/update) | [vim.txt](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/vim.txt) | [zeddd](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/zeddd) |  |  |  |



```

#######################################################################################################
Processing file: .bashrc
   _               _              
  | |__   __ _ ___| |__  _ __ ___ 
  | '_ \ / _` / __| '_ \| '__/ __|
 _| |_) | (_| \__ \ | | | | | (__ 
(_)_.__/ \__,_|___/_| |_|_|  \___|
                                  
# *********************************************************DATEOMATIC: Sat Mar  1 20:59:22 EST 2025
# *********************************************************HASHOMATIC: 77817de3816b3a115eaec6bb1cc34eea
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

source ~/bashrc.shared


export JAVA_HOME=/home/mestes/jdk-23.0.2
export PATH=$JAVA_HOME/bin:$PATH


#######################################################################################################
Processing file: .vimrc
       _                    
__   _(_)_ __ ___  _ __ ___ 
\ \ / / | '_ ` _ \| '__/ __|
 \ V /| | | | | | | | | (__ 
(_)_/ |_|_| |_| |_|_|  \___|
                            
" *********************************************************DATEOMATIC: Sat Mar  1 20:59:22 EST 2025
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
Processing file: bashrc.shared
 _               _                    _                        _ 
| |__   __ _ ___| |__  _ __ ___   ___| |__   __ _ _ __ ___  __| |
| '_ \ / _` / __| '_ \| '__/ __| / __| '_ \ / _` | '__/ _ \/ _` |
| |_) | (_| \__ \ | | | | | (__ _\__ \ | | | (_| | | |  __/ (_| |
|_.__/ \__,_|___/_| |_|_|  \___(_)___/_| |_|\__,_|_|  \___|\__,_|
                                                                 
# *********************************************************DATEOMATIC: Sat Mar  1 20:59:22 EST 2025
# *********************************************************HASHOMATIC: 2a80d4af46ee248e1284c4071e0f35af
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

# make less more friendly for non-text input files, see lesspipe(1)

# show up to 3 parent dirs, except ~, resolve all other dir aliases
git_toplevel() {
    git rev-parse --show-toplevel 2> /dev/null | sed -e "s,^$HOME,~,"
}
git_branch() {
     #git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
     git branch 2> /dev/null | sed 's/^..//' | sed 's/master/m/'
}
git_origin() {
     # git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
     git config --get remote.origin.url 2> /dev/null
}
git_originsync() {
     git config color.ui false
     git branch -vv 2> /dev/null |  gawk 'match($0, /\[([^\]]+)\]/, a) { print a[1] }' | sed 's/origin/o/' | sed 's/master/m/' | sed 's/ ahead /+/'
}
function collapse_pwd {
    curr_pwd=$(pwd | sed -e "s,^$HOME,~,")
    echo $curr_pwd
}
function collapse_hostname {
    curr_hostname=$(hostname)
    echo $curr_hostname
}
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
Processing file: deploy
     _            _             
  __| | ___ _ __ | | ___  _   _ 
 / _` |/ _ \ '_ \| |/ _ \| | | |
| (_| |  __/ |_) | | (_) | |_| |
 \__,_|\___| .__/|_|\___/ \__, |
           |_|            |___/ 

cp ./.bashrc              ~
cp ./bashrc.shared        ~

#######################################################################################################
Processing file: fred
  __              _ 
 / _|_ __ ___  __| |
| |_| '__/ _ \/ _` |
|  _| | |  __/ (_| |
|_| |_|  \___|\__,_|
                    
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

git status > $Tmp
cat $Tmp | gawk '
/Your branch is up to date with .origin.master./ {
    print ":oOK"
}
{
    next
}
'

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
Processing file: get.raw
            _                        
  __ _  ___| |_   _ __ __ ___      __
 / _` |/ _ \ __| | '__/ _` \ \ /\ / /
| (_| |  __/ |_ _| | | (_| |\ V  V / 
 \__, |\___|\__(_)_|  \__,_| \_/\_/  
 |___/                               
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.bashrc
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.vimrc
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/README.md
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.functions
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.justhelp
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashrc.shared
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashtop
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/deploy
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/fred
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gDiff
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gHardSync
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gLocal
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gStatus
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdate
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdateFromOrigin
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/get.raw
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/getme
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/listing
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/make
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/newbashscript
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/notes
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/other
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/setgit
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/testtest
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/update
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/vim.txt
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/zeddd

#######################################################################################################
Processing file: getme
            _                  
  __ _  ___| |_ _ __ ___   ___ 
 / _` |/ _ \ __| '_ ` _ \ / _ \
| (_| |  __/ |_| | | | | |  __/
 \__, |\___|\__|_| |_| |_|\___|
 |___/                         
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.bashrc
https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashrc.shared

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
Processing file: testtest
 _            _   _            _   
| |_ ___  ___| |_| |_ ___  ___| |_ 
| __/ _ \/ __| __| __/ _ \/ __| __|
| ||  __/\__ \ |_| ||  __/\__ \ |_ 
 \__\___||___/\__|\__\___||___/\__|
                                   
test
test

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
#!/bin/bash

# Function to create a markdown table from a text file with 6 columns
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
          echo "| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |"
          echo "|----------|----------|----------|----------|----------|----------|"
          first_row=0
      fi
    fi

    row+="| $line "

    line_count=$((line_count + 1))

    if [[ $line_count -eq 6 ]]; then
      echo "$row|"
      row=""
      line_count=0
    fi
  done < "$input_file"

  # Handle remaining lines if the total line count is not a multiple of 6
  if [[ $line_count -gt 0 ]]; then
    for ((i = line_count; i < 6; i++)); do
        row+="|  "
    done
    echo "$row|"
  fi
}

# Example usage (if you want to test it with a file named "input.txt"):
# create_markdown_table "input.txt"

D=`date`
FILE="./.vimrc"
grep -v DATEOMATIC "$FILE" | grep -v HASHOMATIC > $Tmp
IHASH=$(md5sum "$Tmp" | awk '{print $1}')
echo "\" *********************************************************DATEOMATIC: $D"      > $Tmp1
echo "\" *********************************************************HASHOMATIC: $IHASH" >> $Tmp1
cat $Tmp  >> $Tmp1
cat $Tmp1  > "$FILE"

FILE="./.bashrc"
grep -v DATEOMATIC "$FILE" | grep -v HASHOMATIC > $Tmp
IHASH=$(md5sum "$Tmp" | awk '{print $1}')
echo "# *********************************************************DATEOMATIC: $D"      > $Tmp1
echo "# *********************************************************HASHOMATIC: $IHASH" >> $Tmp1
cat $Tmp  >> $Tmp1
cat $Tmp1  > "$FILE"

FILE="./bashrc.shared"
grep -v DATEOMATIC "$FILE" | grep -v HASHOMATIC > $Tmp
IHASH=$(md5sum "$Tmp" | awk '{print $1}')
echo "# *********************************************************DATEOMATIC: $D"      > $Tmp1
echo "# *********************************************************HASHOMATIC: $IHASH" >> $Tmp1
cat $Tmp  >> $Tmp1
cat $Tmp1  > "$FILE"

git ls-files | gawk '
BEGIN {
    BASE="https://raw.githubusercontent.com/archernar/basics/refs/heads/master/"
}
{
    print BASE $0
}' > get.raw
git add get.raw

rm -f "$Tmp"  >/dev/null 2>&1;

cat get.raw | sort | uniq | gawk '
{
    n=split($0,A,"/")
    print "[" A[n] "](" $0 ")"
}' > $Tmp

grep bashrc get.raw > getme

create_markdown_table "$Tmp" > README.md
echo ""     >> README.md
echo ""     >> README.md
echo ""     >> README.md
./listing   >> README.md

rm -f zed zzed zerd qed qqed fed ffed xx yy xxx yyy moe

if [ "$UPDATE" == "LOCAL" ]; then                                                                                               
    git add .
    git commit  -m "Update"
    git status
fi
if [ "$UPDATE" == "REMOTE" ]; then                                                                                               
    git add .
    git commit  -m "Update"
    git push -u origin master
    git status
fi
if [ "$UPDATE" == "STATUS" ]; then                                                                                               
    git status
fi







# FHASH=`cat ./.vimrc | gawk  ' /HASHOMATIC/ {n=split($0,A," ");h=A[n];gsub(/ +$/, "", h);print h;}'`

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

#######################################################################################################
Processing file: zeddd
             _     _     _ 
 _______  __| | __| | __| |
|_  / _ \/ _` |/ _` |/ _` |
 / /  __/ (_| | (_| | (_| |
/___\___|\__,_|\__,_|\__,_|
                           
[.bashrc](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.bashrc)
[.vimrc](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.vimrc)
[README.md](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/README.md)
[bash.functions](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.functions)
[bash.justhelp](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.justhelp)
[bashrc.shared](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashrc.shared)
[bashtop](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashtop)
[deploy](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/deploy)
[fred](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/fred)
[gDiff](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gDiff)
[gHardSync](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gHardSync)
[gLocal](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gLocal)
[gStatus](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gStatus)
[gUpdate](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdate)
[gUpdateFromOrigin](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdateFromOrigin)
[get.raw](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/get.raw)
[listing](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/listing)
[make](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/make)
[newbashscript](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/newbashscript)
[notes](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/notes)
[other](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/other)
[setgit](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/setgit)
[testtest](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/testtest)
[update](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/update)
[vim.txt](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/vim.txt)
```
