/**
 * 
 */

function makeTable(elem) {
	// elem: emplist.xml 의  <ROW>들

	let $table = $("<table border=1>");

	// 첫번째 줄, 컬럼의 이름 가져오기
	for (let i = 0; i < 1; i++) {
		$tr = $("<tr>");

		for (let j = 0; j < elem.eq(0).children().length; j++) {
			$th = $("<th>").append(elem.eq(0).children().eq(j).prop("tagName"));
			$tr.append($th);
		}
		$table.append($tr);
	}

	// 데이터 넣기

	for (let i = 0; i < elem.length; i++) {
		$tr = $("<tr>");
		for (let j = 0; j < elem.eq(i).children().length; j++) {
			$td = $("<td>").append(elem.eq(i).children().eq(j).text());
			$tr.append($td);
		}
		$table.append($tr);
	}


	return $table;
}