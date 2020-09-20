  const ciphertext = '---.. T---.. -.... T..---   R--------.. ...-- E----- ----.   R--------.. R....------ E.--.- .----   R......---- -.... .---- -....';
  const morseNumbers = {'.----':1, '..---':2, '...--':3, '....-':4, '.....':5, '-....':6, '--...':7, '---..':8, '----.':9, '-----':0};
  const funList = {
    T:(a)=>a.split('').reverse().slice(0,a.length-1).join(''),
    E:(a)=>a[a.length-1]+a.slice(2,a.length-1)+a[1],
    R:(a)=>a.split('').filter((item,i)=>i%2).join('')
  };
  
  const morse = (text) => text.split('   ')
                              .map(item=>item.split(' ')
                                              .map((item)=>item[0]==='.' || item[0]==='-' ? morseNumbers[item]:morseNumbers[funList[item[0]](item)])
                                              .join(''))
                              .join(' ');
  console.log(morse(ciphertext));
  
