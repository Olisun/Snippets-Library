const secretMessage = document.getElementById('secretMessage')
const secret = document.getElementById('secret');
secret.hidden = true;

secretMessage.onmousedown = () => {
  secret.hidden = false;
};

secretMessage.onmouseup = () => {
  secret.hidden = true;
};

const array = ['listItem1', 'listItem2', 'listItem3', 'listItem4', 'listItem5', 'listItem6', 'listItem7', 'listItem8', 'listItem9', 'listItem10', 'listItem11', 'listItem12', 'listItem13'];
const singleItem = [];

array.forEach((item) => {
  singleItem.push(document.getElementById(item))
});

const mouseOver = (event) => {
  event.target.style.color = 'red';
  event.target.style.fontSize = '20px';
  event.target.style.backgroundColor = 'rgba(85, 139, 203, 1)';

};

const mouseOut = (event) => {
  event.target.style.color = '';
  event.target.style.fontSize = '';
  event.target.style.backgroundColor = '';

};

const eventAssign = (item) => {
  item.onmouseover = () => {
    mouseOver(event);
  };
};

const eventAssign2 = (item) => {
  item.onmouseout = () => {
    mouseOut(event);
  };
};

singleItem.forEach(eventAssign);
singleItem.forEach(eventAssign2);