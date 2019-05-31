import styled from "styled-components"

export const HomeWrapper = styled.div `
	width:960px;
	margin:0 auto;
	overflow:hidden; 
`;

export const HomeLeft = styled.div `
	margin-left:15px;
	padding-top:30px;
	width:625px;
	float:left;
	.banner-img{
		width:625px;
		height:240px;
	}
`;

export const HomeRight = styled.div `
	width:280px;
	float:right;
`;
export const TopicWrapper = styled.div `
	padding:20px 0 10px 0;
	overflow:hidden;
	margin-left:-18px;
	border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div `
	float:left;
	background:#f7f7f7;
	margin-left:18px;
	height:32px;
	line-height:32px;
	font-size:14px;
	color:#000;
	padding-right:10px;
	margin-bottom:18px;
	border:1px solid #dcdcdc;
	border-radius:4px;
	.topic-pic {
		display:block;
		float:left;
		width:32px;
		height:32px;
		margin-right:10px;

	}

`;

export const ListItem = styled.div `
	overflow:hidden;
	padding:20px 0;
	border-bottom:1px solid #dcdcdc;
	.pic {
		display:block;
		width:125px;
		height:100px;
		float:right;
		border-radius:10px;
	}
`;

export const ListInfo = styled.div `
	width:500px;
	float:left;
	.title {
		line-height:27px;
		font-size:18px;
		font-weight:bold;
		color:#333;
	}
	.desc {
		line-height:24px;
		font-size:13px;
		color:#999;

	}
`;

export const RecommendWrapper = styled.div `
	margin:30px 0;
	width:280px;
	
`;

export const RecommendItem = styled.div `
	width:280px;
	height:50px;
	background:url(${(props) => props.imgUrl});
	background-size:contain;

`;

export const WriterWrapper = styled.div `
	width:278px;
	height:300px;
	border:1px solid #dcdcdc;
	border-radius:3px;
	overflow:hidden;
	position:relative;
`;

export const Write_top = styled.div `
	color:#333;
	width:278px;
	margin-left:0;
	margin-top:0;
	box-sizing: border-box;
	font-size:14px;
	color:#969696;
	span {
		float:left;
	};
	a {
		float:right;
		display:inline-block;
		cursor:pointer;
		color:#969696;
	}
`;

export const WriteList = styled.div `
	width:278px;
	float:left;
	margin:0 0 20px;
	padding-left:0;
	text-align:left;
`;

export const Writeitem = styled.div `
	width:278px;
	float:left;
	height:60px;
	.writePic {
		width:48px;
		height:48px;
		border:1px solid #ddd;
		border-radius:50%;
		margin:0 7px 0 0;
		float:left;
	}
	.title {
		line-height:27px;
		font-size:14px;
		color:#333;
		padding-top: 5px;
        margin-right: 60px;
        display:block;
        float:left;
	}
	.desc {
		line-height:24px;
		font-size:12px;
		color:#969696;
		margin-top:2px;
		margin:32px 0 10px;


	}

`;

export const Write_bottom = styled.div `
	position:absolute;
	padding:7px 7px 7px 0px;
	left:0;
	bottom:0;
	width:100%;
	font-size:13px;
	color:#787878;
	background-color:#f7f7f7;
	border:1px solid #dcdcdc;
	border-radius:4px;
	cursor:pointer;
	text-align:center;

`;


export const LoadMore = styled.div `
	width:100%;
	height:40px;
	cursor:pointer;
	border-radius:20px;
	line-height:40px;
	text-align:center;
	background:#a5a5a5;
	color:#fff;
	margin:30px 0;
`;

export const BackTop = styled.div `
	position:fixed;
	height:60px;
	right:100px;
	bottom:100px;
	width:60px;
	line-height:60px;
	text-align:center;
	border:1px solid #ccc;
	font-size:14px;
`;