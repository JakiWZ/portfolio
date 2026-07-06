import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skills,
} from "../content/profile";

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.45,
    paddingVertical: 42,
    paddingHorizontal: 48,
    color: "#111111",
  },
  name: { fontSize: 22, fontFamily: "Helvetica-Bold", letterSpacing: 0.2 },
  title: { fontSize: 11, marginTop: 2, color: "#333333" },
  contact: { marginTop: 6, fontSize: 9, color: "#333333" },
  section: { marginTop: 14 },
  heading: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 0.75,
    borderBottomColor: "#999999",
    paddingBottom: 3,
    marginBottom: 6,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  role: { fontFamily: "Helvetica-Bold", fontSize: 10 },
  org: { color: "#333333" },
  period: { color: "#555555", fontSize: 9 },
  bullet: { flexDirection: "row", marginTop: 1.5 },
  bulletDash: { width: 12 },
  small: { fontSize: 9, color: "#333333" },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    fontSize: 7,
    color: "#777777",
    textAlign: "center",
  },
});

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <View>
      {items.map((item) => (
        <View key={item} style={s.bullet}>
          <Text style={s.bulletDash}>–</Text>
          <Text style={{ flex: 1 }}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export function CvDocument({ email }: { email: string }) {
  return (
    <Document
      title={`${profile.name} — CV`}
      author={profile.name}
      subject="Curriculum Vitae"
    >
      <Page size="A4" style={s.page}>
        <Text style={s.name}>{profile.name}</Text>
        <Text style={s.title}>{profile.title}</Text>
        <Text style={s.contact}>
          {email}  ·  {profile.linkedin}  ·  {profile.github}  ·  {profile.location}
        </Text>

        <View style={s.section}>
          <Text style={s.heading}>Summary</Text>
          <Text>{profile.pdfSummary}</Text>
        </View>

        <View style={s.section}>
          <Text style={s.heading}>Skills</Text>
          {skills.map((category) => (
            <Text key={category.label} style={{ marginTop: 1.5 }}>
              <Text style={{ fontFamily: "Helvetica-Bold" }}>
                {category.label}:{" "}
              </Text>
              {category.items.join(", ")}
            </Text>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.heading}>Experience</Text>
          {experience.map((entry) => (
            <View key={entry.role + entry.period} style={{ marginBottom: 7 }}>
              <View style={s.row}>
                <Text style={s.role}>
                  {entry.role} <Text style={s.org}>— {entry.org}</Text>
                </Text>
                <Text style={s.period}>{entry.period}</Text>
              </View>
              <Bullets items={entry.bullets} />
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.heading}>Selected Projects</Text>
          {projects.map((project) => (
            <View key={project.title} style={{ marginBottom: 6 }}>
              <View style={s.row}>
                <Text style={s.role}>
                  {project.title} <Text style={s.org}>— {project.subtitle}</Text>
                </Text>
                <Text style={s.period}>{project.period}</Text>
              </View>
              <Text>{project.problem}</Text>
              {project.repoUrl ? (
                <Text style={s.small}>{project.repoUrl}</Text>
              ) : null}
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.heading}>Education</Text>
          {education.map((entry) => (
            <View key={entry.role}>
              <View style={s.row}>
                <Text style={s.role}>
                  {entry.role} <Text style={s.org}>— {entry.org}</Text>
                </Text>
                <Text style={s.period}>{entry.period}</Text>
              </View>
              <Bullets items={entry.bullets} />
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.heading}>Certifications</Text>
          <Text>
            {certifications
              .map((cert) => `${cert.name} (${cert.issuer}, ${cert.year})`)
              .join("  ·  ")}
          </Text>
        </View>

        <View style={s.section}>
          <Text style={s.heading}>Languages</Text>
          <Text>Italian (native)  ·  English (C1, certified)</Text>
        </View>

        <Text style={s.footer} fixed>
          I authorize the processing of my personal data pursuant to Regulation
          (EU) 2016/679 (GDPR).
        </Text>
      </Page>
    </Document>
  );
}
