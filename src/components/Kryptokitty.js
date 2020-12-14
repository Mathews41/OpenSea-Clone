import React, { Component } from "react";
import "../components/Kryptokitty.css";
import { FiArrowDown, FiChevronDown } from "react-icons/fi";
import {
  MdSearch,
  MdExpandMore,
  MdRefresh,
  MdShare,
  MdLaunch,
  MdMoreVert,
  MdCheckCircle,
  MdBrightness1,
  Md3DRotation,
  MdShowChart,
  MdLocalOffer,
  MdList,
  MdAccountCircle,
} from "react-icons/md";

export default class Kryptokitty extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <div className="dropdown-container">
            <div>
              <img src="https://opensea.io/static/images/logos/opensea-logo.png" />
            </div>
            <div>
              <button>
                <FiChevronDown className="down-icon" />
              </button>
            </div>
          </div>
          <div className="search-container">
            <div className="icon">
              <MdSearch className="search-icon" />
            </div>
            <input
              className="search-input"
              placeholder="Search items, collections, and accounts"
            />
          </div>
        </div>
        <div className="menu-large">
          <div className="dropdown-container">
            <div>
              <img src="https://opensea.io/static/images/logos/opensea-logo.png" />
            </div>
            <div>
              <span>
                <h2 className="title">OpenSea</h2>
              </span>
            </div>
          </div>
          <div className="search-container">
            <div className="icon">
              <MdSearch className="search-icon" />
            </div>
            <input
              className="search-input"
              placeholder="Search items, collections, and accounts"
            />
          </div>
          <div>
            <ul className="menu-item-container">
              <li className="menu-item">Browse</li>
              <li className="menu-item">Activity</li>
              <li className="menu-item">Ranking</li>
              <li className="menu-item">Create</li>
              <li className="menu-item">Help</li>
              <li className="menu-item">Blog</li>
              <li className="menu-item">
                <MdAccountCircle className="menu-icon" />
              </li>
            </ul>
          </div>
        </div>
        <div className="main">
          <div>
            <div className="share-row">
              <a href="https://opensea.io/collection/cryptokitties">
                <div>KryptoKitties</div>
                <span>
                  <MdCheckCircle className="checked-circle" />{" "}
                </span>
              </a>
              <div className="share-icons">
                <button>
                  <MdRefresh className="s-icons" />
                </button>
                <button>
                  <MdShare className="s-icons" />
                </button>
                <button>
                  <MdLaunch className="s-icons" />
                </button>
                <button>
                  <MdMoreVert className="s-icons" />
                </button>
              </div>
            </div>
            <h1>Elizabeth Chan</h1>
          </div>
          <div className="img-container">
            <img
              className="kitty-img"
              src="https://lh3.googleusercontent.com/6aoGU08uf1Jv9F4LPfsjITvA3tMqsaiVLZEm0Ak7q15bznsxdhauIxplyeiU4Mr1bbkfFofPDSjFBH7tPDZVNSQ=s992"
            />
          </div>
          <div className="ownership-row">
            <div>
              <MdBrightness1 className="dot" />
            </div>
            <span className="owned-by">Owned By</span>
            <div className="owner">Mark Mathews</div>
          </div>
          <div className="dropdown-buttons">
            <div className="button">
              <div className="left-column">
                <div>
                  <MdShowChart className="button-icon" />
                </div>
                <div>
                  <h4>Price History</h4>
                </div>
              </div>
              <div className="right-column">
                <FiChevronDown className="right-column-icon" />
              </div>
            </div>
            <div className="button">
              <div className="left-column">
                <div>
                  <MdLocalOffer className="button-icon" />
                </div>
                <div>
                  <h4>Listings</h4>
                </div>
              </div>
              <div className="right-column">
                <FiChevronDown className="right-column-icon" />
              </div>
            </div>
            <div className="button">
              <div className="left-column">
                <div>
                  <MdList className="button-icon" />
                </div>
                <div>
                  <h4>Offers</h4>
                </div>
              </div>
              <div className="right-column">
                <FiChevronDown className="right-column-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="main-large">
            <div className="main-left-column">
              <div className="img-container">
                <img
                  className="kitty-img"
                  src="https://lh3.googleusercontent.com/6aoGU08uf1Jv9F4LPfsjITvA3tMqsaiVLZEm0Ak7q15bznsxdhauIxplyeiU4Mr1bbkfFofPDSjFBH7tPDZVNSQ=s992"
                />
              </div>
            </div>
            <div className="main-right-column">
            <div className="share-row">
              <a href="https://opensea.io/collection/cryptokitties">
                <div>KryptoKitties</div>
                <span>
                  <MdCheckCircle className="checked-circle" />{" "}
                </span>
              </a>
              <div className="share-icons">
                <button>
                  <MdRefresh className="s-icons" />
                </button>
                <button>
                  <MdShare className="s-icons" />
                </button>
                <button>
                  <MdLaunch className="s-icons" />
                </button>
                <button>
                  <MdMoreVert className="s-icons" />
                </button>
              </div>
            </div>
            <h1>Elizabeth Chan</h1>
            <div className="ownership-row">
            <div>
              <MdBrightness1 className="dot" />
            </div>
            <span className="owned-by">Owned By</span>
            <div className="owner">Mark Mathews</div>
          </div>
          <div className="dropdown-buttons">
            <div className="button">
              <div className="left-column">
                <div>
                  <MdShowChart className="button-icon" />
                </div>
                <div>
                  <h4>Price History</h4>
                </div>
              </div>
              <div className="right-column">
                <FiChevronDown className="right-column-icon" />
              </div>
            </div>
            <div className="button">
              <div className="left-column">
                <div>
                  <MdLocalOffer className="button-icon" />
                </div>
                <div>
                  <h4>Listings</h4>
                </div>
              </div>
              <div className="right-column">
                <FiChevronDown className="right-column-icon" />
              </div>
            </div>
            <div className="button">
              <div className="left-column">
                <div>
                  <MdList className="button-icon" />
                </div>
                <div>
                  <h4>Offers</h4>
                </div>
              </div>
              <div className="right-column">
                <FiChevronDown className="right-column-icon" />
              </div>
            </div>
          </div>
          </div>
          
            </div>
        </div>
    );
  }
}
