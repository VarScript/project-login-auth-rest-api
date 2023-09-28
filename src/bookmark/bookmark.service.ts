import { Injectable } from '@nestjs/common';
import {
  CreateBookmark,
  EditBookmark,
} from './dto';

@Injectable()
export class BookmarkService {
  getBookmarks(userId: number) {}

  getBookmarkById(
    userId: number,
    bookmarkId: number,
  ) {}

  createBookmark(
    userId: number,
    dto: CreateBookmark,
  ) {}

  editBookmarkById(
    userId: number,
    bookmarkId: number,
    dto: EditBookmark,
  ) {}

  deleteBookmarkById(
    userId: number,
    bookmarkId: number,
  ) {}
}
