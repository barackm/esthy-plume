import React, { Component } from "react";
import truncatedStr from "../../utils/truncatedStr";

class SearchNavbar extends Component {
  state = {};
  render() {
    const {
      selectedCategory,
      onShowAllCategories,
      searchQuery,
      search,
    } = this.props;
    console.log(search);
    return (
      <div className="search-navbar-main-container">
        {search ? (
          <span>
            Affichages des articles sur la recherche{" "}
            <strong style={{ textTransform: "none" }}>
              "{truncatedStr(searchQuery, 20)}"
            </strong>
          </span>
        ) : (
          <span>
            Affichages des articles sur la category{" "}
            <strong>"{selectedCategory.name}"</strong>
          </span>
        )}
        <span onClick={onShowAllCategories}>Voir tout</span>
      </div>
    );
  }
}

export default SearchNavbar;
