export const aboutQuery = `*[_type == "about"][0] {
    _id,
    title,
    subtitles,
    "avatar": avatar.asset->url,
    description,
    github,
    linkedin,
    "cv": cv.asset->url,
    contactEmail
}`;

export const allExperienceQuery = `*[_type == "experience"] {
    _id,
    code,
    title,
    company,
    startDate,
    endDate,
    isCurrent,
    description,
    "certificateFile": certificate.asset->url,
    certificateUrl
}`;

export const allTechnologiesQuery = `*[_type == "technology"] {
    _id,
    "id": id.current,
    name,
    color,
    category
}`;

export const allProjectsPreviewQuery = `*[_type == "project"] {
    _id,
    order,
    "slug": slug.current,
    title,
    isReady,
    "icon": icon.asset->url,
    "preview": preview.asset->url
}`;

export const allProjectsQuery = `*[_type == "project"] {
    _id,
    order,
    "slug": slug.current,
    title,
    isReady,
    description,
    skills[] -> {
        "id": id.current,
        name,
        color
    },
    repository,
    website,
    githubId,
    "logo": logo.asset->url,
    "architecture": architecture.asset->url
}`;