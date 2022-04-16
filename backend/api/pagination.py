from rest_framework.pagination import CursorPagination
class NotePagination(CursorPagination): 
    page_size=4
    ordering = ['note_id']