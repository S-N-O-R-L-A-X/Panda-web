<template>
<div>
  <p id="title2">Classes We Have</p>
  <p id="content2">introduction</p>
  <v-img src="../pics/classes/Card Image 1.png" id="class1"></v-img>
  <p id="classH1">一级课程</p>
  <p id="classC1">{{text[0]}}</p> 
  <v-img src="../pics/classes/Card Image 3.png" id="class2"></v-img>
  <p id="classH2">二级课程</p>
  <p id="classC2">{{text[1]}}</p> 
  <v-img src="../pics/classes/Card Image 2.png" id="class3"></v-img>
  <p id="classH3">三级课程</p>
  <p id="classC3">{{text[2]}}</p> 
  
</div>
</template>

<script>
export default {
  data(){
    return {
      text:[
        "根据HSK1级词汇语法原创的汉语歌曲，帮助你理解并使用一些非常简单的汉语词语和句子，满足具体的交际需求，培养进一步学习汉语的能力。",
        "根据HSK2级词汇语法原创的汉语歌曲，帮助你用汉语就熟悉的日常话题进行简单而直接的交流，达到初级汉语优等水平。",
        "根据HSK2级词汇语法原创的汉语歌曲，帮助你用汉语就熟悉的日常话题进行简单而直接的交流，达到初级汉语优等水平。"
      ]
    }
  }
}
</script>

<style scoped>
.v-img
{
    width: 160px;
    height: 160px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(223, 237, 246, 0.4), 0px 40px 70px rgba(180, 212, 235, 0.04), 0px 16px 36px rgba(180, 212, 235, 0.04), 0px 8px 24px rgba(180, 212, 235, 0.08), 0px 6px 8px rgba(180, 212, 235, 0.12);
    border-radius: 16px;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 36px;
}

#class1
{
    position: absolute; 
    left: 129px;
    top: 194px;    
}

#class2
{
    position: absolute; 
    left: 841px;
    top: 411px;    
}


#class3
{
    position: absolute; 
    left: 188px;
    top: 715px;    
}

#title2
{
  position: absolute;
  width: 534px;
  height: 56px;
  left:550px;
  top: 60px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color:#1A1A5E;
  /* identical to box height, or 117% */

  text-align: center;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 16px 0px;
}

#content2
{
  position: absolute;
  width: 526px;
  height: 48px;
  left:457px;
  top: 136px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color:#1A1A5E;
  /* or 150% */

  text-align: center;
  letter-spacing: 0.005em;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 1;
  margin: 0px 0px;

}

#classH1
{
  position: absolute;
  width: 308px;
  height: 32px;
  left: 325px;
  top: 224px;

  /* Font Gilroy/H5/SemiBold */

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color:#1A1A5E;
  /* identical to box height, or 123% */



  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;
}

#classC1
{
  position: absolute;
  width: 308px;
  height: 48px;
  left: 325px;
  top: 274px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color:#1A1A5E;
  /* or 150% */

  letter-spacing: 0.005em;


  /* Inside Auto Layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;
}

#classH2
{
  position: absolute;
  width: 308px;
  height: 32px;
  left: 1037px;
  top: 441px;

  /* Font Gilroy/H5/SemiBold */

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color:#1A1A5E;
  /* identical to box height, or 123% */



  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;
}

#classC2
{
  position: absolute;
  width: 308px;
  height: 48px;
  left: 1037px;
  top: 491px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color:#1A1A5E;
  /* or 150% */

  letter-spacing: 0.005em;


  /* Inside Auto Layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;
}

#classH3
{
  position: absolute;
  width: 308px;
  height: 32px;
  left: 384px;
  top: 745px;

  /* Font Gilroy/H5/SemiBold */

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color:#1A1A5E;
  /* identical to box height, or 123% */



  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;
}

#classC3
{
  position: absolute;
  width: 308px;
  height: 48px;
  left: 384px;
  top: 795px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color:#1A1A5E;
  /* or 150% */

  letter-spacing: 0.005em;


  /* Inside Auto Layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;
}
</style>