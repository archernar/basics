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
set foldcolumn=3
set foldmethod=marker
set foldlevelstart=20
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
    return
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
                " Auto Commands
                " *************************************************************************************
    augroup AUTOGROUPONE
        autocmd!
        "au BufNewFile,BufRead *.ses let s=g:SessionMan()
    augroup END

" *****************************************************************************************************
                " Session Setup
                " *************************************************************************************
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

"   ***************************************************************************************************
                " Jump to Last Position When Reopening a File
                " *************************************************************************************
   if has("autocmd")
      au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$")
      \| exe "normal! g'\"" | endif
   endif
