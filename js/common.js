//검색창
const searchEl = document.querySelector('.search');//문서에서 .search를 찾음
const searchInputEl = searchEl.querySelector('input');//.search에서 input을 찾음

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
}); //searchEl을 클릭하면 searchInputEl에도 포커스를 적용해라

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');//searchInputEl에 포커스가 되면 searchEl에 focused 클래스를 추가해라
  searchInputEl.setAttribute('placeholder', '통합검색');//searchInputEl에 html의 속성을 부여함, setAttribute('속성이름','속성값')
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');//searchInputEl에 포커스가 해제(블러)되면 searchEl에 focused 클래스를 삭제해라
  searchInputEl.setAttribute('placeholder', '');//searchInputEl에 html의 속성을 부여함
});


// 연도계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  // 2021