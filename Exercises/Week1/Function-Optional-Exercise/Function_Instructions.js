const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {
    
}


const countWords = function(sentence){
    const cleanSentence = cleanText(sentence);
    for(word in cleanSentence){
        addToCounter(cleanSentence[word]);
    }
  }
  
  const addToCounter = function(word){
        console.log(word);
          if(word in wordCounts)
             wordCounts[word] = wordCounts[word] + 1;
          else 
             wordCounts[word] = 1;
  }
  
  const cleanText = function(sentence){
    for(str in sentence)
        str = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    let Text = removeSpecialChars(sentence);
    return Text.split(" ");
  }
  
  const removeSpecialChars = function(sentence){
    for (Char of specialChars)
        sentence = sentence.split(Char).join("");
    return sentence;
  }
  
  countWords(story)
  console.log(wordCounts);
  