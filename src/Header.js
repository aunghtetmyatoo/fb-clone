import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import GroupIcon from "@material-ui/icons/Group";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import FlagIcon from "@material-ui/icons/Flag";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, IconButton } from "@material-ui/core";

function Header(props) {
	return (
		<div className="header">
			<div className="header__left">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" />
				<div className="header__input">
					<SearchIcon />
					<input type="text" placeholder="Search Facebook" />
				</div>
			</div>

			<div className="header__middle">
				<div className="header__option header__option__active">
					<HomeIcon fontSize="large" />
				</div>
				<div className="header__option">
					<LiveTvIcon fontSize="large" />
				</div>
				<div className="header__option">
					<GroupIcon fontSize="large" />
				</div>
				<div className="header__option">
					<VideogameAssetIcon fontSize="large" />
				</div>
				<div className="header__option">
					<FlagIcon fontSize="large" />
				</div>
			</div>

			<div className="header__right">
				<div className="header__info">
					<Avatar />
					<h4>AungHtetMyatOo</h4>
				</div>
				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Header;