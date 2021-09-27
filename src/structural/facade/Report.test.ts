import Report from "./Report";
import ReportHeader from "./ReportHeader";
import ReportBody from "./ReportBody";
import ReportFooter from "./ReportFooter";

test("Should generate reports", function() {
    const report = new Report();
    report.setHeader(new ReportHeader("Header"));
    report.setBody(new ReportBody("Body"));
    report.setFooter(new ReportFooter("Footer"));

    const html = report.generate();
    expect(html).toBe("<div>Header</div><div>Body</div><div>Footer</div>");
})