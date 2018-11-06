process.stdout.write('prompt > ');  // write to the terminal

process.stdin.on('data', (data) => {  //take the input from the terminal and store it as data : questions regarding parameters
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    let output = process.cwd();
    process.stdout.write(output);
  } else {
    process.stdout.write(cmd);
  }
  //console.log('updated again')
  // writes it back to the terminal
  process.stdout.write('\nprompt >'); //this might be a loop in the application???
  //console.log('This is done')
})

/* process.stdin.on('data', () => {  //take the input from the terminal and store it as data : questions regarding parameters
  const cmd = process.cwd();

  process.stdout.write(cmd);// writes it back to the terminal
  process.stdout.write('\nprompt >'); //this might be a loop in the application???
  //console.log('This is done')
}) */
