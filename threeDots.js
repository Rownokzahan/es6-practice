const nums =[1,2,3,4,5];
const nums2 =[6,7,8];
const nums3 =[9,10,11,12];

const allNums = nums.concat(nums2).concat([5]).concat(nums3);
const allNums2 = [...nums,...nums2,5,...nums3];

const a =489;
const b = 123;
const c = 345;
const max = Math.max(a,b,c);

const taka =[12,345,211];
const maxTaka = Math.max(...taka);
