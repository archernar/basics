| ---------------------------------------- | ---------------------------------------- |
|----------|----------|
| [.bashrc](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.bashrc) | [gawk.library](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gawk.library) |
| [.gitignore](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.gitignore) | [gemini.vim](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gemini.vim) |
| [.vimrc](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/.vimrc) | [get.raw](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/get.raw) |
| [README.md](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/README.md) | [getme](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/getme) |
| [bash.functions](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.functions) | [indentomatic](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/indentomatic) |
| [bash.justhelp](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.justhelp) | [justomatic](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/justomatic) |
| [bash.library](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bash.library) | [listing](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/listing) |
| [bashfunctionextractor](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashfunctionextractor) | [make](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/make) |
| [bashrc.shared](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashrc.shared) | [markdown.css](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/markdown.css) |
| [bashtop](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/bashtop) | [newbashscript](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/newbashscript) |
| [colomatic](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/colomatic) | [notes](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/notes) |
| [deploy](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/deploy) | [other](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/other) |
| [functionlist.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/functionlist.bash) | [padomatic](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/padomatic) |
| [gDiff](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gDiff) | [rmLeadingWhiteSpace](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/rmLeadingWhiteSpace) |
| [gHardSync](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gHardSync) | [setgit](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/setgit) |
| [gLocal](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gLocal) | [template.html](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/template.html) |
| [gStatus](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gStatus) | [thinner.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/thinner.bash) |
| [gUpdate](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdate) | [update](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/update) |
| [gUpdateFromOrigin](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/gUpdateFromOrigin) | [vim.txt](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/vim.txt) |


| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
|----------|----------|----------|----------|
| colomatic | indentomatic | justomatic | padomatic |


## bash.library includes

| ---------------------------------------- | ---------------------------------------- |
|----------|----------|
| abspath(path) | justify_file(filename,num) |
| alpha_normal2(filename) | justify_line(str,num) |
| array_contains(needle) | kill_name(name) |
| array_join(delimiter) | kill_pid(pid) |
| backup_file(filename,backup_dir) | mecho(sz) |
| basename(path) | mkdir_p(void) |
| collapse_hostname(void) | mv_f(filename1,filename2) |
| collapse_pwd(void) | necho(sz) |
| command_exists(command) | padout_file_lines(filename) |
| contains(string,substring) | pidof_name(name) |
| cp_r(filename1,filename2) | prompter(question,default:-}") |
| create_markdown_table2(input_file,str) | remove_leading_whitespace(input) |
| create_markdown_table3(input_file,str) | repeat_char(char,count) |
| create_markdown_table4(input_file,str) | replace(string,old,new) |
| current_timestamp(void) | rm_rf(filename) |
| dirname(path) | rm_rf_silent(filename) |
| eecho(sz) | run_and_error(command) |
| ends_with(string,suffix) | run_and_exit_code(command) |
| error(msg) | run_and_output(command) |
| examplesComparison(str) | scan_for_secrets(file) |
| exists(void) | sort_file(filename,str) |
| extension(path) | split_file_n(input_file,num_files) |
| git_branch(void) | starts_with(string,prefix) |
| git_origin(void) | string_after_file_lines(filename,str) |
| git_originsync(void) | string_before_file_lines(filename,str) |
| git_toplevel(void) | substring(string,start,length) |
| indent_file(filename) | timestamp_ms(void) |
| info(msg) | trim(str) |
| isSameHash(filename) | trim_leading_whitespace_file(filename) |
| is_dir(void) | truncate_file_lines(filename,num_chars) |
| is_file(void) | warn(msg) |
| is_reachable(hostname) | &nbsp; |


## bash.library includes
| ---------------------------------------- | ---------------------------------------- |
|----------|----------|
| [abspath.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/abspath.bash) | [justify_file.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/justify_file.bash) |
| [alpha_normal2.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/alpha_normal2.bash) | [justify_line.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/justify_line.bash) |
| [array_contains.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/array_contains.bash) | [kill_name.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/kill_name.bash) |
| [array_join.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/array_join.bash) | [kill_pid.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/kill_pid.bash) |
| [backup_file.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/backup_file.bash) | [mecho.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/mecho.bash) |
| [basename.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/basename.bash) | [mkdir_p.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/mkdir_p.bash) |
| [collapse_hostname.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/collapse_hostname.bash) | [mv_f.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/mv_f.bash) |
| [collapse_pwd.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/collapse_pwd.bash) | [necho.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/necho.bash) |
| [command_exists.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/command_exists.bash) | [padout_file_lines.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/padout_file_lines.bash) |
| [contains.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/contains.bash) | [pidof_name.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/pidof_name.bash) |
| [cp_r.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/cp_r.bash) | [prompter.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/prompter.bash) |
| [create_markdown_table2.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/create_markdown_table2.bash) | [remove_leading_whitespace.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/remove_leading_whitespace.bash) |
| [create_markdown_table3.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/create_markdown_table3.bash) | [repeat_char.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/repeat_char.bash) |
| [create_markdown_table4.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/create_markdown_table4.bash) | [replace.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/replace.bash) |
| [current_timestamp.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/current_timestamp.bash) | [rm_rf.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/rm_rf.bash) |
| [dirname.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/dirname.bash) | [rm_rf_silent.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/rm_rf_silent.bash) |
| [eecho.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/eecho.bash) | [run_and_error.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/run_and_error.bash) |
| [ends_with.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/ends_with.bash) | [run_and_exit_code.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/run_and_exit_code.bash) |
| [error.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/error.bash) | [run_and_output.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/run_and_output.bash) |
| [examplesComparison.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/examplesComparison.bash) | [scan_for_secrets.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/scan_for_secrets.bash) |
| [exists.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/exists.bash) | [sort_file.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/sort_file.bash) |
| [extension.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/extension.bash) | [split_file_n.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/split_file_n.bash) |
| [git_branch.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/git_branch.bash) | [starts_with.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/starts_with.bash) |
| [git_origin.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/git_origin.bash) | [string_after_file_lines.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/string_after_file_lines.bash) |
| [git_originsync.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/git_originsync.bash) | [string_before_file_lines.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/string_before_file_lines.bash) |
| [git_toplevel.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/git_toplevel.bash) | [substring.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/substring.bash) |
| [indent_file.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/indent_file.bash) | [timestamp_ms.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/timestamp_ms.bash) |
| [info.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/info.bash) | [trim.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/trim.bash) |
| [isSameHash.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/isSameHash.bash) | [trim_leading_whitespace_file.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/trim_leading_whitespace_file.bash) |
| [is_dir.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/is_dir.bash) | [truncate_file_lines.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/truncate_file_lines.bash) |
| [is_file.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/is_file.bash) | [warn.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/warn.bash) |
| [is_reachable.bash](https://raw.githubusercontent.com/archernar/basics/refs/heads/master/files/is_reachable.bash) | [&nbsp;](&nbsp;) |
