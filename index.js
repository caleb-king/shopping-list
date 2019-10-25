'use strict';

function main () {

//enter items they need to purchase by entering text and clicking the "Add item" button
$('#js-shopping-list-form button').click(event => {
  event.preventDefault();
  let shoppingListEntry = $('#shopping-list-entry').val();
  if (shoppingListEntry !== '') {
    $('ul').append(
      `<li>
        <span class="shopping-item">${shoppingListEntry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
  }
});

//check and uncheck items on the list by clicking the "Check" button
$('ul').on('click', '.shopping-item-toggle', event => {
  $(event.currentTarget).parent().siblings('span').toggleClass('shopping-item__checked');
});

//permanently remove items from the list (use .closest)
$('ul').on('click', '.shopping-item-delete span', event => {
  $(event.currentTarget).closest('li').remove();
});

}

$(main);