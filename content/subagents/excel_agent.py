from conn import llm
from content.mcps import excel_mcp
from content.middles import file_manager_middle,wait_rate_limit

def get_agent():
    return {
        "name": "excel-agent",
        "description": "制作Excel的助手",
        # 重点：强烈约束系统提示词
        "system_prompt": "你是一个Excel助手。你只能使用提供的工具，绝对不能自己写代码生成Excel。如果用户让你建表，你必须调用 create_simple_excel。",
        "tools": excel_mcp.get_tools(),  # 确保这里只有一个 create_simple_excel 工具
        "model": llm.get_llm(),
        "middleware": [file_manager_middle.FileManagerMiddleware(), wait_rate_limit.wait_rate_limit]
    }