export class Category {
  title: String;
  summary: String;
  content: String;
  author: String;
  readTime: Number;
  replyTime: Number;
  goodTime: Number;
  creatTime: Date;

  constructor(title?: String, summary?: String, content?: String, author?: String, readTime?: Number, replayTime?: Number, goodTime?: Number, createTime?: Date) {
    this.title = title;
    this.summary = summary;
    this.content = content;
    this.author = author;
    this.readTime = readTime;
    this.replyTime = replayTime;
    this.goodTime = goodTime;
    this.creatTime = createTime;
  }
}
