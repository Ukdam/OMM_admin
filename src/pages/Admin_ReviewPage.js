import { FilteringTable } from "../compoents/FilteringTable";
import { PaginationTable } from "../compoents/PaginationTable";
import { ReviewTable } from "../compoents/ReviewTable";
import { SortingTable } from "../compoents/SortingTable";
import "../css/Admin_ReviewPage.css";

export default function Admin_ReviewPage() {
  return (
    <>
      <main className="main_outlet font_01">
        <div className="rp_title_container">후기</div>
        {/* <div className="rp_search_container">검색 영역</div> */}
        <div className="rp_table_container">
          <ReviewTable />
          {/* <SortingTable /> */}
          {/* <FilteringTable /> */}
          {/* <PaginationTable /> */}
        </div>
      </main>
    </>
  );
}
