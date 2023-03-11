
let marks= Array(6)
marks=new Array(1,4,5,2,4,7)

let arr=[4,5,8,3]
console.log(arr[0])
arr[0]=9
console.log(arr[0])
arr.push(5)
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(6)
console.log(arr)
console.log(marks.indexOf(8)) //indexOf
console.log(marks.includes(8)) // includes
console.log(marks)
marks =marks.slice(2,4)
console.log(marks)
let sum=0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i]
    console.log(marks[i])
}
console.log("Sum: "+sum)

//reduce filter map (summing up values)
let total=marks.reduce((sum,mark)=>sum+mark,0)
console.log("Sum: "+total)

var scores=[12,13,14,16]
var evenScores=[]
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2==0){
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

//filter (only when condition satisified)
var evScores=scores.filter(score=>score%2==0)
console.log(evScores) //12,14,16 -> 36,42,48

//map (map exisiting values with new one)
let mappedarr= evScores.map(score=>score*3)
console.log(mappedarr)

let newtotal=mappedarr.reduce((sum,arrval)=>sum+arrval,0)
console.log(newtotal)

// Single line
var arr1=[3,4,6,8,7,9]
let sumtotal = arr1.filter(num=>num%2==0).map(num=>num*3).reduce((sum,num)=>sum+num,0)
console.log(sumtotal)