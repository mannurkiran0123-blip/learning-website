function searchTopics() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  if (document.getElementsByClassName("topic-box").length > 0) {
    // Filter topics on Topics page
    const topics = document.getElementsByClassName("topic-box");
    for (let i = 0; i < topics.length; i++) {
      const text = topics[i].innerText.toLowerCase();
      topics[i].style.display = text.includes(input) ? "block" : "none";
    }
  } else {
    // Redirect from Home or other pages
    if (input.trim() !== "") {
      window.location.href = "topics.html?search=" + encodeURIComponent(input);
    }
  }
}

window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get('search');
  if (searchQuery) {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = searchQuery;

    const topics = document.getElementsByClassName("topic-box");
    for (let i = 0; i < topics.length; i++) {
      const text = topics[i].innerText.toLowerCase();
      topics[i].style.display = text.includes(searchQuery.toLowerCase()) ? "block" : "none";
    }
  }
};
