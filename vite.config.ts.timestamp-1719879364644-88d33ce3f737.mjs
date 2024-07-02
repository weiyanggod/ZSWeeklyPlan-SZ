// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/14608/Desktop/%E9%A1%B9%E7%9B%AE/%E6%8B%9B%E5%95%86%E5%91%A8%E8%AE%A1%E5%88%92%E6%8A%A5%E8%A1%A8/%E6%B7%B1%E5%9C%B3/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/14608/Desktop/%E9%A1%B9%E7%9B%AE/%E6%8B%9B%E5%95%86%E5%91%A8%E8%AE%A1%E5%88%92%E6%8A%A5%E8%A1%A8/%E6%B7%B1%E5%9C%B3/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/14608/Desktop/%E9%A1%B9%E7%9B%AE/%E6%8B%9B%E5%95%86%E5%91%A8%E8%AE%A1%E5%88%92%E6%8A%A5%E8%A1%A8/%E6%B7%B1%E5%9C%B3/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueDevTools from "file:///C:/Users/14608/Desktop/%E9%A1%B9%E7%9B%AE/%E6%8B%9B%E5%95%86%E5%91%A8%E8%AE%A1%E5%88%92%E6%8A%A5%E8%A1%A8/%E6%B7%B1%E5%9C%B3/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/14608/Desktop/%E9%A1%B9%E7%9B%AE/%E6%8B%9B%E5%95%86%E5%91%A8%E8%AE%A1%E5%88%92%E6%8A%A5%E8%A1%A8/%E6%B7%B1%E5%9C%B3/vite.config.ts";
var vite_config_default = defineConfig({
  base: "./",
  server: {
    host: "0.0.0.0",
    proxy: {
      //api是自行设置的请求前缀，任何请求路径以/api开头的请求将被代理到对应的target目标
      "^/plan": {
        target: "http://115.231.76.92:8827/",
        //目标域名
        changeOrigin: true,
        //需要代理跨域
        secure: false
      }
    }
  },
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxNDYwOFxcXFxEZXNrdG9wXFxcXFx1OTg3OVx1NzZFRVxcXFxcdTYyREJcdTU1NDZcdTU0NjhcdThCQTFcdTUyMTJcdTYyQTVcdTg4NjhcXFxcXHU2REYxXHU1NzMzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxNDYwOFxcXFxEZXNrdG9wXFxcXFx1OTg3OVx1NzZFRVxcXFxcdTYyREJcdTU1NDZcdTU0NjhcdThCQTFcdTUyMTJcdTYyQTVcdTg4NjhcXFxcXHU2REYxXHU1NzMzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy8xNDYwOC9EZXNrdG9wLyVFOSVBMSVCOSVFNyU5QiVBRS8lRTYlOEIlOUIlRTUlOTUlODYlRTUlOTElQTglRTglQUUlQTElRTUlODglOTIlRTYlOEElQTUlRTglQTElQTgvJUU2JUI3JUIxJUU1JTlDJUIzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogJy4vJyxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJzAuMC4wLjAnLFxuICAgIHByb3h5OiB7XG4gICAgICAvL2FwaVx1NjYyRlx1ODFFQVx1ODg0Q1x1OEJCRVx1N0Y2RVx1NzY4NFx1OEJGN1x1NkM0Mlx1NTI0RFx1N0YwMFx1RkYwQ1x1NEVGQlx1NEY1NVx1OEJGN1x1NkM0Mlx1OERFRlx1NUY4NFx1NEVFNS9hcGlcdTVGMDBcdTU5MzRcdTc2ODRcdThCRjdcdTZDNDJcdTVDMDZcdTg4QUJcdTRFRTNcdTc0MDZcdTUyMzBcdTVCRjlcdTVFOTRcdTc2ODR0YXJnZXRcdTc2RUVcdTY4MDdcbiAgICAgICdeL3BsYW4nOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMTUuMjMxLjc2LjkyOjg4MjcvJywgLy9cdTc2RUVcdTY4MDdcdTU3REZcdTU0MERcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLCAvL1x1OTcwMFx1ODk4MVx1NEVFM1x1NzQwNlx1OERFOFx1NTdERlxuICAgICAgICBzZWN1cmU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbdnVlKCksIHZ1ZUpzeCgpLCBWdWVEZXZUb29scygpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1ksU0FBUyxlQUFlLFdBQVc7QUFFdmEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGlCQUFpQjtBQUxxSyxJQUFNLDJDQUEyQztBQU85TyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUE7QUFBQSxNQUVMLFVBQVU7QUFBQSxRQUNSLFFBQVE7QUFBQTtBQUFBLFFBQ1IsY0FBYztBQUFBO0FBQUEsUUFDZCxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxZQUFZLENBQUM7QUFBQSxFQUN4QyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
