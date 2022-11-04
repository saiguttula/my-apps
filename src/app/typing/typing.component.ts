import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstructionsDialogComponent } from './instructions.dialog.component';
import { TypingService } from './typing.service';

export interface DialogData {
  score: number
};


@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})

export class TypingComponent implements OnInit,OnDestroy {

  private stories = [
    {
      story : "When most people hear the term artificial intelligence, the first thing they usually think of is robots. That's because big-budget films and novels weave stories about human-like machines that wreak havoc on Earth.But nothing could be further from the truth.Artificial intelligence is based on the principle that human intelligence can be defined in a way that a machine can easily mimic it and execute tasks, from the most simple to those that are even more complex. The goals of artificial intelligence include mimicking human cognitive activity. Researchers and developers in the field are making surprisingly rapid strides in mimicking activities such as learning, reasoning, and perception, to the extent that these can be concretely defined. Some believe that innovators may soon be able to develop systems that exceed the capacity of humans to learn or reason out any subject. But others remain skeptical because all cognitive activity is laced with value judgments that are subject to human experience. As technology advances, previous benchmarks that defined artificial intelligence become outdated. For example, machines that calculate basic functions or recognize text through optical character recognition are no longer considered to embody artificial intelligence, since this function is now taken for granted as an inherent computer function.AI is continuously evolving to benefit many different industries. Machines are wired using a cross-disciplinary approach based on mathematics, computer science,linguistics, psychology, and more."
    },
    {
      story: "The first computers were used primarily for numerical calculations. However, as any information can be numerically encoded, people soon realized that computers are capable of general-purpose information processing. Their capacity to handle large amounts of data has extended the range and accuracy of weather forecasting. Their speed has allowed them to make decisions about routing telephone connections through a network and to control mechanical systems such as automobiles, nuclear reactors, and robotic surgical tools. They are also cheap enough to be embedded in everyday appliances and to make clothes dryers and rice cookers “smart.” Computers have allowed us to pose and answer questions that could not be pursued before. These questions might be about DNA sequences in genes, patterns of activity in a consumer market, or all the uses of a word in texts that have been stored in a database. Increasingly, computers can also learn and adapt as they operate.Computers also have limitations, some of which are theoretical. For example, there are undecidable propositions whose truth cannot be determined within a given set of rules, such as the logical structure of a computer. Because no universal algorithmic method can exist to identify such propositions, a computer asked to obtain the truth of such a proposition will (unless forcibly interrupted) continue indefinitely—a condition known as the halting problem. (See Turing machine.) Other limitations reflect current technology. Human minds are skilled at recognizing spatial patterns—easily distinguishing among human faces, for instance—but this is a difficult task for computers, which must process information sequentially, rather than grasping details overall at a glance. Another problematic area for computers involves natural language interactions."
    },
    {
      story: "Chess has long been the game of gentleman, geniuses, philanthropists and other gifted people. This has formed an incredibly wide misconception around the word that ONLY geniuses and gifted people can play the game and it is strictly designed for them.If someone was asked to name the first things that come to their mind when they hear chess player, it would be old, smart, talented,genius and many other things unrelated to everyday people… But once again, this is a misconception it is a false belief injected to people by mass media.The reality of chess is different it actually is an incredibly beneficial pastime, because playing chess results in better brain function, improved memory and cognitive abilities, strategic thinking and attention improvement. All of these benefits are directly related to the practice of chess, both in real-life and virtual environments, which means that chess is the answer to the question Is there a game where I can have fun AND get benefits from? the brain is remarkable it is responsible for our mental performance and it is the most crucial organ in the human body. When the brain has no stimulation, the cells inside slowly die, it's an example of if you don't use it, you lose it moto, however, chess is a tool which gives users a rigorous mental workout. Let's look at a quick example: to get the most benefit from a physical workout, you need to exercise both the left and right sides of your body. Studies show that in order to play chess well, a player must develop and utilize his or her brain's left hemisphere, which deals with object recognition, as well as the right hemisphere, which deals with pattern recognition. Over time, thanks to the rules and techniques involved in the game, playing chess will effectively exercise and develop not one but both sides of your brain. Scientists also claim that playing chess can improve mental age by up to 14 years. How's that for a workout?"
    },
    {
      story: "Shivaji Maharaj is one of the great national heroes of India. He created an independent and sovereign state in Maharashtra which was based on justice, welfare of the people and tolerance to all faiths. The aims, objectives and Rajnitee of the Maratha Swaraj under Chhatrapati Shivaji provided a new direction to contemporary politics of India. In course of time, his movement assumed,the form of an all-India struggle; a struggle which was to change the political map of India.Shivaji Maharaj was born at the Shivneri fort near Junnar in Pune district on 19th February 1630. Shivaji's mother, Jijabai was the daughter of Lakhuji Jadhavrao of Sindkhed. His father Shahajiraje Bhosale was a prominent sardar in the Deccan. At the time of Shivaji Maharaj's birth, most of the territory in Maharashtra was under the possession of the Nizamshah of Ahmednagar and the Adilshah of Bijapur. In the coastal belt of Konkan there were two sea powers, the Portuguese and the Siddi. The British and the Dutch who were engaged in expanding their trade also had their factories on the coast. The Mughals, since the period of Emperor Akbar 1 wanted to expand their power in the South. The Mughals launched a campaign to conquer the Nizamshahi Kingdom. The Adilshah of Bijapur allied with the Mughals in this campaign. Shahahajiraje tried to save the Nizamshahi, but he could not withstand the combined might of the Mughals and the Adilshahi. The Nizamshahi kingdom came to an end in A.D. 1636. Thereafter Shahajiraje became a sardar of the Adilshah of Bijapur and was posted in Karnataka. The region comprising Pune, Supe, Indapur and Chakan parganas located between the Bhima and Nira rivers which was vested in Shahajiraje as a jagir was continued by the Adilshah. Shahaijiraje was also assigned a jagir of Banglore. Veermata Jijabai and Shivajiraje, stayed for a few years with Shahajiraje at Banglore till Shivajiraje was twelve years old. Shahajiraje entrusted the administration of the Pune jagir to Shivajiraje and Veermata Jijabai. Shivajiraje grew up amidst the hills and valleys of Pune region under the guidance of his mother Jijabai."
    },
    {
      story: "Don't let the name fool you: a black hole is anything but empty space. Rather, it is a great amount of matter packed into a very small area - think of a star ten times more massive than the Sun squeezed into a sphere approximately the diameter of New York City. The result is a gravitational field so strong that nothing, not even light, can escape. In recent years, NASA instruments have painted a new picture of these strange objects that are, to many, the most fascinating objects in space.The idea of an object in space so massive and dense that light could not escape it has been around for centuries. Most famously, black holes were predicted by Einstein's theory of general relativity, which showed that when a massive star dies, it leaves behind a small,dense remnant core. If the core's mass is more than about three times the mass of the Sun, the equations showed, the force of gravity overwhelms all other forces and produces a black hole.Scientists can't directly observe black holes with telescopes that detect x-rays, light, or other forms of electromagnetic radiation. We can, however, infer the presence of black holes and study them by detecting their effect on other matter nearby. If a black hole passes through a cloud of interstellar matter, for example, it will draw matter inward in a process known as accretion. A similar process can occur if a normal star passes close to a black hole. In this case, the black hole can tear the star apart as it pulls it toward itself. As the attracted matter accelerates and heats up, it emits x-rays that radiate into space. Recent discoveries offer some tantalizing evidence that black holes have a dramatic influence on the neighborhoods around them - emitting powerful gamma ray bursts, devouring nearby stars, and spurring the growth of new stars in some areas while stalling it in others."
    },
    {
      story : "When most people hear the term artificial intelligence, the first thing they usually think of is robots.That's because big-budget films and novels weave stories about human-like machines that wreak havoc on Earth.But nothing could be further from the truth.Artificial intelligence is based on the principle that human intelligence can be defined in a way that a machine can easily mimic it and execute tasks, from the most simple to those that are even more complex. The goals of artificial intelligence include mimicking human cognitive activity. Researchers and developers in the field are making surprisingly rapid strides in mimicking activities such as learning, reasoning, and perception, to the extent that these can be concretely defined. Some believe that innovators may soon be able to develop systems that exceed the capacity of humans to learn or reason out any subject.But others remain skeptical because all cognitive activity is laced with value judgments that are subject to human experience.As technology advances, previous benchmarks that defined artificial intelligence become outdated. For example, machines that calculate basic functions or recognize text through optical character recognition are no longer considered to embody artificial intelligence, since this function is now taken for granted as an inherent computer function.AI is continuously evolving to benefit many different industries. Machines are wired using a cross-disciplinary approach based on mathematics, computer science,linguistics, psychology, and more."
    },
    {
      story: "The first computers were used primarily for numerical calculations. However, as any information can be numerically encoded,people soon realized that computers are capable of general-purpose information processing. Their capacity to handle large amounts of data has extended the range and accuracy of weather forecasting. Their speed has allowed them to make decisions about routing telephone connections through a network and to control mechanical systems such as automobiles, nuclear reactors, and robotic surgical tools. They are also cheap enough to be embedded in everyday appliances and to make clothes dryers and rice cookers Computers have allowed us to pose and answer questions that could not be pursued before. These questions might be about DNA sequences in genes, patterns of activity in a consumer market, or all the uses of a word in texts that have been stored in a database. Increasingly, computers can also learn and adapt as they operate.Computers also have limitations, some of which are theoretical. For example, there are undecidable propositions whose truth cannot be determined within a given set of rules, such as the logical structure of a computer. Because no universal algorithmic method can exist to identify such propositions, a computer asked to obtain the truth of such a proposition will (unless forcibly interrupted) continue indefinitely—a condition known as the halting problem. (See Turing machine.) Other limitations reflect current technology. Human minds are skilled at recognizing spatial patterns—easily distinguishing among human faces, for instance—but this is a difficult task for computers, which must process information sequentially, rather than grasping details overall at a glance. Another problematic area for computers involves natural language interactions."
    },
    {
      story: "Chess has long been the game of gentleman, geniuses, philanthropists and other gifted people. This has formed an incredibly wide misconception around the word that ONLY geniuses and gifted people can play the game and it is strictly designed for them.If someone was asked to name the first things that come to their mind when they hear chess player, it would be old, smart, talented, genius and many other things unrelated to everyday people… But once again, this is a misconception it is a false belief injected to people by mass media.The reality of chess is different it actually is an incredibly beneficial pastime, because playing chess results in better brain function, improved memory and cognitive abilities, strategic thinking and attention improvement. All of these benefits are directly related to the practice of chess, both in real-life and virtual environments, which means that chess is the answer to the question Is there a game where I can have fun AND get benefits from? the brain is remarkable it is responsible for our mental performance and it is the most crucial organ in the human body. When the brain has no stimulation, the cells inside slowly die, it's an example of if you don't use it, you lose it” moto, however, chess is a tool which gives users a rigorous mental workout. Let's look at a quick example: to get the most benefit from a physical workout, you need to exercise both the left and right sides of your body. Studies show that in order to play chess well, a player must develop and utilize his or her brain's left hemisphere, which deals with object recognition, as well as the right hemisphere, which deals with pattern recognition. Over time, thanks to the rules and techniques involved in the game, playing chess will effectively exercise and develop not one but both sides of your brain.Scientists also claim that playing chess can improve mental age by up to 14 years. How's that for a workout?"
    },
    {
      story: "Shivaji Maharaj is one of the great national heroes of India. He created an independent and sovereign state in Maharashtra which was based on justice, welfare of the people and tolerance to all faiths. The aims, objectives and Rajnitee of the Maratha Swaraj under Chhatrapati Shivaji provided a new direction to contemporary politics of India. In course of time, his movement assumed,the form of an all-India struggle; a struggle which was to change the political map of India.Shivaji Maharaj was born at the Shivneri fort near Junnar in Pune district on 19th February 1630. Shivaji's mother, Jijabai was the daughter of Lakhuji Jadhavrao of Sindkhed. His father Shahajiraje Bhosale was a prominent sardar in the Deccan. At the time of Shivaji Maharaj's birth, most of the territory in Maharashtra was under the possession of the Nizamshah of Ahmednagar and the Adilshah of Bijapur. In the coastal belt of Konkan there were two sea powers, the Portuguese and the Siddi. The British and the Dutch who were engaged in expanding their trade also had their factories on the coast. The Mughals, since the period of Emperor Akbar 1 wanted to expand their power in the South. The Mughals launched a campaign to conquer the Nizamshahi Kingdom. The Adilshah of Bijapur allied with the Mughals in this campaign. Shahahajiraje tried to save the Nizamshahi, but he could not withstand the combined might of the Mughals and the Adilshahi. The Nizamshahi kingdom came to an end in A.D. 1636. Thereafter Shahajiraje became a sardar of the Adilshah of Bijapur and was posted in Karnataka. The region comprising Pune, Supe, Indapur and Chakan parganas located between the Bhima and Nira rivers which was vested in Shahajiraje as a jagir was continued by the Adilshah. Shahaijiraje was also assigned a jagir of Banglore. Veermata Jijabai and Shivajiraje, stayed for a few years with Shahajiraje at Banglore till Shivajiraje was twelve years old. Shahajiraje entrusted the administration of the Pune jagir to Shivajiraje and Veermata Jijabai. Shivajiraje grew up amidst the hills and valleys of Pune region under the guidance of his mother Jijabai."
    },
    {
      story: "Don't let the name fool you: a black hole is anything but empty space. Rather, it is a great amount of matter packed into a very small area - think of a star ten times more massive than the Sun squeezed into a sphere approximately the diameter of New York City. The result is a gravitational field so strong that nothing, not even light, can escape. In recent years, NASA instruments have painted a new picture of these strange objects that are, to many, the most fascinating objects in space.The idea of an object in space so massive and dense that light could not escape it has been around for centuries. Most famously, black holes were predicted by Einstein's theory of general relativity, which showed that when a massive star dies, it leaves behind a small,dense remnant core. If the core's mass is more than about three times the mass of the Sun, the equations showed, the force of gravity overwhelms all other forces and produces a black hole.Scientists can't directly observe black holes with telescopes that detect x-rays, light, or other forms of electromagnetic radiation. We can, however, infer the presence of black holes and study them by detecting their effect on other matter nearby. If a black hole passes through a cloud of interstellar matter, for example, it will draw matter inward in a process known as accretion. A similar process can occur if a normal star passes close to a black hole. In this case, the black hole can tear the star apart as it pulls it toward itself. As the attracted matter accelerates and heats up, it emits x-rays that radiate into space. Recent discoveries offer some tantalizing evidence that black holes have a dramatic influence on the neighborhoods around them - emitting powerful gamma ray bursts, devouring nearby stars, and spurring the growth of new stars in some areas while stalling it in others."
    },
    {
      story : "When most people hear the term artificial intelligence, the first thing they usually think of is robots.That's because big-budget films and novels weave stories about human-like machines that wreak havoc on Earth.But nothing could be further from the truth.Artificial intelligence is based on the principle that human intelligence can be defined in a way that a machine can easily mimic it and execute tasks, from the most simple to those that are even more complex. The goals of artificial intelligence include mimicking human cognitive activity. Researchers and developers in the field are making surprisingly rapid strides in mimicking activities such as learning, reasoning, and perception, to the extent that these can be concretely defined. Some believe that innovators may soon be able to develop systems that exceed the capacity of humans to learn or reason out any subject.But others remain skeptical because all cognitive activity is laced with value judgments that are subject to human experience.As technology advances, previous benchmarks that defined artificial intelligence become outdated. For example, machines that calculate basic functions or recognize text through optical character recognition are no longer considered to embody artificial intelligence, since this function is now taken for granted as an inherent computer function.AI is continuously evolving to benefit many different industries. Machines are wired using a cross-disciplinary approach based on mathematics, computer science,linguistics, psychology, and more."
    },
  ]


  text:string=''
  nextText:string='';


  constructor(private dialog:MatDialog, private typingService:TypingService) {
    const instructionsDialog = this.dialog.open(InstructionsDialogComponent);
   }

  ngOnInit(): void {
    let number = Math.ceil(Math.random()*10);
    this.text = this.stories[number].story;
    this.nextText = this.text;
    this.typingService.timeEvent.subscribe(()=>{
      this.onSetTime();
    });
  }

  inter:any

  ngOnDestroy(): void {
      clearInterval(this.inter);
  }

  prevText:string='';
  usertext:any;
  currentIndex:any=0;
  containerBgColor:any;
  matchedKeys:number = 0;
  maxLength:number = 1;
  time:number = 60;

  onKeyPress():void{
    this.currentIndex = this.usertext.length;
    if(this.text.slice(this.currentIndex-1,this.currentIndex)===this.usertext.slice(this.currentIndex-1,this.currentIndex)){
      this.prevText = this.text.slice(0,this.currentIndex);
      this.nextText = this.text.slice(this.currentIndex);
      this.containerBgColor = 'rgb(31, 165, 31)';
      if(this.maxLength<=this.currentIndex-1){
        this.matchedKeys++;
        this.maxLength=this.currentIndex-1;
      }
    }else{
      this.containerBgColor = 'red';
      this.matchedKeys--;
    }
  }

  onSetTime(){
    this.inter = setInterval(()=>{
      if(this.time ===0 ){
        clearInterval(this.inter);
        const score = Math.ceil(this.matchedKeys/5)
        this.dialog.open(EntryDialogComponent,{
          data: {score:score}
        })
      }else{
        this.time--;
      }
    },1000)
  }
}

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry.dialog.component.html'})

export class EntryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData,public dialogRef:MatDialogRef<EntryDialogComponent>){}

  onClickPlayAgain(){
    window.location.reload();
  }
}
