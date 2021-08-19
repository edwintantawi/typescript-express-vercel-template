import shell from 'shelljs';

shell.cp('-R', 'src/views', 'build');
shell.cp('-R', 'src/public', 'build');
