
# Create a mermaid diagram showing the website structure
diagram_code = """
graph TD
    A[Heresy Prevention Team Website<br/>이단예방팀 웹사이트]
    
    A --> B[📺 영상 리스트<br/>Video List]
    A --> C[⚠️ 주요이단<br/>Heresy List]
    A --> D[🔗 참고사이트<br/>Reference Sites]
    A --> E[⚙️ 관리자<br/>Admin Panel]
    
    B --> B1[YouTube 링크 관리]
    C --> C1[이단 정보]
    D --> D1[외부 링크]
    E --> E1[비밀번호 보호]
    
    style A fill:#1FB8CD,stroke:#13343B,stroke-width:3px,color:#fff
    style B fill:#B3E5EC,stroke:#1FB8CD,stroke-width:2px
    style C fill:#FFCDD2,stroke:#DB4545,stroke-width:2px
    style D fill:#A5D6A7,stroke:#2E8B57,stroke-width:2px
    style E fill:#FFEB8A,stroke:#D2BA4C,stroke-width:2px
    style B1 fill:#E8F7F9,stroke:#1FB8CD,stroke-width:1px
    style C1 fill:#FFE8E8,stroke:#DB4545,stroke-width:1px
    style D1 fill:#E0F2E0,stroke:#2E8B57,stroke-width:1px
    style E1 fill:#FFF8D7,stroke:#D2BA4C,stroke-width:1px
"""

# Create the diagram using the helper function
create_mermaid_diagram(diagram_code, 'website_structure.png', 'website_structure.svg', width=1400, height=900)
