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
