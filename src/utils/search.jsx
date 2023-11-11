// searchUtils.js
export function filterItemsBySearch(items, searchQuery, keyToSearch) {
    return items.filter((item) =>
      item[keyToSearch] &&
      item[keyToSearch].toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  