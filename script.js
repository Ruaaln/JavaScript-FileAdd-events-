var max = 10;
var data = [];
var input = document.getElementById('imageInput');
var gallery = document.getElementById('gallery');
var count = document.getElementById('count');

function render(){
  gallery.innerHTML = '';
  data.forEach(function(item){
    var div = document.createElement('div');
    div.className = 'item';
    div.dataset.id = item.id;

    var img = document.createElement('img');
    img.src = item.url;
    div.appendChild(img);

    var del = document.createElement('button');
    del.className = 'del';
    del.textContent = 'x';
    del.onclick = function(){ remove(item.id); };
    div.appendChild(del);

    gallery.appendChild(div);
  });
  count.textContent = data.length + ' / ' + max;
  console.log('render:', data);
}

function remove(id){
  data = data.filter(function(x){ return x.id !== id; });
  console.log('remove id:', id);
  render();
}

input.addEventListener('change', function(){
  var files = Array.from(input.files);
  if(data.length + files.length > max){
    alert('Max 10 şəkil');
    return;
  }

  files.forEach(function(f){
    var url = URL.createObjectURL(f);
    var id = Math.random().toString(36).slice(2,9);
    data.push({ id:id, url:url });
  });

  console.log('add:', data);
  input.value = '';
  render();
});
