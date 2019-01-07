/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package wang.jeneser.superbar;

import android.graphics.Rect;
import android.os.Build;
import android.os.Bundle;
import android.support.v4.view.OnApplyWindowInsetsListener;
import android.support.v4.view.ViewCompat;
import android.support.v4.view.WindowInsetsCompat;
import android.view.View;
import android.view.ViewTreeObserver;

import org.apache.cordova.CordovaActivity;

public class MainActivity extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {

            getWindow().getDecorView().setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
                            View.SYSTEM_UI_FLAG_LAYOUT_STABLE);

            final View contentView = findViewById(android.R.id.content);

            enableKeyboardHelper(contentView);
        }

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }

        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);
    }

    /**
     * Based on:
     * https://stackoverflow.com/a/52622795/6031927
     * https://github.com/mikepenz/MaterialDrawer/blob/aa9136fb4f5b3a80460fe5f47213985026d20c88/library/src/main/java/com/mikepenz/materialdrawer/util/KeyboardUtil.java
     */
    private void enableKeyboardHelper(final View contentView) {
        if(contentView != null) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {

                ViewCompat.setOnApplyWindowInsetsListener(contentView , new OnApplyWindowInsetsListener() {
                    @Override
                    public WindowInsetsCompat onApplyWindowInsets(View v, WindowInsetsCompat insets) {
                        v.setPadding(0, 0, 0, insets.getSystemWindowInsetBottom());
                        return insets;
                    }
                });

            } else {
                getWindow().getDecorView().getViewTreeObserver().addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener() {
                    @Override
                    public void onGlobalLayout() {
                        Rect r = new Rect();
                        //r will be populated with the coordinates of your view that area still visible.
                        getWindow().getDecorView().getWindowVisibleDisplayFrame(r);

                        //get screen height and calculate the difference with the useable area from the r
                        int height = getWindow().getDecorView().getContext().getResources().getDisplayMetrics().heightPixels;
                        int diff = height - r.bottom;

                        //if it could be a keyboard add the padding to the view
                        if (diff != 0) {
                            // if the use-able screen height differs from the total screen height we assume that it shows a keyboard now
                            //check if the padding is 0 (if yes set the padding for the keyboard)
                            if (contentView.getPaddingBottom() != diff) {
                                //set the padding of the contentView for the keyboard
                                contentView.setPadding(0, 0, 0, diff);
                            }
                        } else {
                            //check if the padding is != 0 (if yes reset the padding)
                            if (contentView.getPaddingBottom() != 0) {
                                //reset the padding of the contentView
                                contentView.setPadding(0, 0, 0, 0);
                            }
                        }
                    }
                });
            }
        }
    }
}
